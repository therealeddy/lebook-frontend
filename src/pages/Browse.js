import React, { useEffect, useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import logo from '../assets/images/logo.png'
import Timeline from '../pages/Timeline'
import ListLivros from '../pages/ListLivros'
import PublicarLivros from '../pages/PublicarLivros'
import Editar from '../pages/Editar'
import api from '../services/api'

export default function Browse(props) {

    const [ buttonBooks, setButtonBooks ] = useState(false)

    useEffect(() => {
        if(!localStorage.getItem('@Login:username')){
            props.history.push('/')
        }

        const fetchData = async e => {
            const user = await api.get(`/users/${localStorage.getItem('@Login:username')}`)

            if(user.data[0].type === 'author') setButtonBooks(true)
        }

        fetchData()
    }, [props])

    const handleExit = () => {
        localStorage.removeItem('@Login:username')
        props.history.push('/')
    }

    return (
        <React.Fragment>

            <div className="container d-flex justify-content-between align-items-center py-5">
                <Link to="/browse"><img src={logo} height={40} alt="Lebook" /></Link>
                <div>
                    
                    { buttonBooks && (
                        <Link to="/browse/books" className="btn btn-primary mr-3">Seus Livro</Link>
                    )}

                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={handleExit}
                    >
                        Sair
                    </button>
                </div>
            </div>

            <Switch>
                <Route path="/browse" exact component={Timeline} />
                <Route path="/browse/books" component={ListLivros} />
                <Route path="/browse/pub" component={PublicarLivros} />
                <Route path="/browse/edit/:id" component={Editar} />
            </Switch>
        </React.Fragment>
    );
}