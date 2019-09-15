import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Form } from "@rocketseat/unform";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: "#F29D16",
    "&:hover": {
      backgroundColor: "#F29D16"
    }
  }
}));

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    password: false,
    username: false
  });
  const [modal, setModal] = React.useState({
    open: false,
    content: ""
  });

  const classes = useStyles();

  function handleClose() {
    setModal({ ...modal, open: false });
  }

  useEffect(() => {
    if (localStorage.getItem("@Login:username")) {
      props.history.push("/browse");
    }
  }, [props]);

  const handleLogin = async e => {
    const user = await api.get(`/users/${username}/${password}`);

    if (!user.data[0]) {
      setModal({ open: true, content: "Usuário não encontrado!" });
      return;
    }

    localStorage.setItem("@Login:username", user.data[0].username);

    props.history.push("/browse");
  };

  const handleSubmit = data => {
    if (!username || !password) {
      setError({
        username: !username,
        password: !password
      });

      return;
    } else {
      setError({ username: false, password: false });
      handleLogin();
    }
  };

  return (
    <Container>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <Form onSubmit={handleSubmit}>
              <div className="form">
                <div className="input-single">
                  <FormControl>
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <Input
                      id="username"
                      error={error.username}
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                    />
                  </FormControl>
                </div>
                <div className="input-single">
                  <FormControl>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                      id="password"
                      error={error.password}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      type="password"
                    />
                  </FormControl>
                </div>

                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  className={classes.button}
                >
                  Login
                </Button>

                <Link to="/register" className="link-cad">
                  Cadastre-se
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <Dialog
        open={modal.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Mensagem</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {modal.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
