import React, { useState, useEffect } from "react";
import api from "../services/api";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import { Form } from "@rocketseat/unform";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   if (localStorage.getItem("@Login:username")) {
  //     props.history.push("/browse");
  //   }
  // }, [props]);

  // const handleLogar = () => {
  //   if (username === "" || password === "") {
  //     alert("Preencha todos os campos");
  //     return;
  //   }

  //   handleLogin();
  // };

  // const handleLogin = async e => {
  //   const user = await api.get(`/users/${username}/${password}`);

  //   if (!user.data[0]) {
  //     alert("Usuario nao encontrado");
  //     return;
  //   }

  //   localStorage.setItem("@Login:username", user.data[0].username);

  //   props.history.push("/browse");
  // };

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-4">
          <Form onSubmit={handleSubmit}>
            <FormControl>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input
                id="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </FormControl>

            <Button variant="contained" color="secondary">
              Login
            </Button>
          </Form>

          {/* <div className="form-login">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
