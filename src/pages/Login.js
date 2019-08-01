import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import api from '../services/api'

export default function Login(props) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {

    if(localStorage.getItem('@Login:username')){
      props.history.push('/browse')
    }

  }, [props])

  const handleLogar = () => {
    if(username === '' || password === ''){
      alert('Preencha todos os campos')
      return
    }

    handleLogin()
  }
  
  const handleLogin = async e => {

    const user =  await api.get(`/users/${username}/${password}`)

    if(!user.data[0]){
      alert('Usuario nao encontrado')
      return
    }

    localStorage.setItem('@Login:username', user.data[0].username)

    props.history.push('/browse')
    
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
                placeholder="Usuário"
                onChange={e => setUsername(e.target.value)}
              />

              <input 
                type="password"
                className="form-control mb-3"
                placeholder="Senha"
                onChange={e => setPassword(e.target.value)}
              />

              <div className="d-flex">
                <button
                  className="btn btn-primary mr-3"
                  onClick={handleLogar}
                >Entrar</button>

                <Link to="/register" className="btn btn-success">Cadastrar</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}