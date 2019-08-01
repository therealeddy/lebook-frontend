import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import api from '../services/api'

export default function Register(props) {

    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [type, setType] = useState('')

    const handleRegister = () => {

        if(username === '' || name === '' || password === '' || passwordConfirm === '' || type === ''){
            alert('Preencha todos os campos')
            return
        }

        if(!(passwordConfirm === password)){
            alert('Senhas nao coincidem')
            return
        }

        handleNewAuthor()
    }

    const handleNewAuthor = async e => {

        const exist = await api.get(`/users/${username}`)

        if(exist.data[0]){
            alert('Usuario ja existente')
            return
        }

        const result = await api.post('/users', {
            username,
            name,
            password,
            type,
        })

        if(result.data){
            alert('Usuario cadastrado com sucesso! =D')
            props.history.push('/')
        }else{
            alert('Ocorreu algum erro, tente novamente mais tarde! :(')
        }
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                    <div className="form-login">
                        <div>
                            <img src={Logo} alt="Lebook" className="mb-5"/>

                            <input 
                                type="text" 
                                className="form-control mb-3" 
                                placeholder="Usuario"
                                onChange={e => setUsername(e.target.value)}
                            />

                            <input 
                                type="text" 
                                className="form-control mb-3" 
                                placeholder="Nome"
                                onChange={e => setName(e.target.value)}
                            />

                            <input 
                                type="password"
                                className="form-control mb-3"
                                placeholder="Senha"
                                onChange={e => setPassword(e.target.value)}
                            />

                            <input 
                                type="password" 
                                className="form-control mb-3" 
                                placeholder="Confirmar Senha"
                                onChange={e => setPasswordConfirm(e.target.value)}
                            />

                            <div className="d-flex mb-3">
                                <div className="form-check mr-3">
                                    <input className="form-check-input" type="radio" name="plano" id="leitor" value="leitor"
                                        onClick={e => setType('leitor')}
                                    />
                                    <label className="form-check-label" htmlFor="leitor" value="leitor"
                                        onClick={e => setType('leitor')}
                                    >Leitor</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="plano" id="autor" value="author"
                                        onClick={e => setType('author')}
                                    />
                                    <label className="form-check-label" htmlFor="autor" value="author"
                                        onClick={e => setType('author')}
                                    >Autor</label>
                                </div>
                            </div>
                            <button type="button" className="btn btn-success"
                                onClick={handleRegister}
                            >Cadastrar</button>
                            <Link to="/" className="btn btn-primary ml-3">Voltar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}