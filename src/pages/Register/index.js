import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { Container } from "./styles";
import { Form } from "@rocketseat/unform";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel
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

export default function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [type, setType] = useState("");

  const [error, setError] = useState({
    password: false,
    username: false,
    name: false,
    passwordConfirm: false,
    type: false
  });

  const [modal, setModal] = React.useState({
    open: false,
    content: ""
  });

  const classes = useStyles();

  function handleClose() {
    setModal({ ...modal, open: false });
  }

  function handleChangeType(event) {
    setType(event.target.value);
  }

  const handleNewAuthor = async e => {
    const exist = await api.get(`/users/${username}`);

    if (exist.data[0]) {
      setModal({ open: true, content: "Usuário já existente!" });
      return;
    }

    const result = await api.post("/users", {
      username,
      name,
      password,
      type
    });

    if (result.data) {
      props.history.push("/");
    } else {
      setModal({
        open: true,
        content: "Ocorreu algum erro, tente novamente mais tarde! :("
      });
    }
  };

  const handleSubmit = data => {
    if (!username || !password || !name || !passwordConfirm || !type) {
      setError({
        username: !username,
        password: !password,
        name: !name,
        passwordConfirm: !passwordConfirm,
        type: !type
      });

      return;
    } else {
      setError({
        password: false,
        username: false,
        name: false,
        passwordConfirm: false,
        type: false
      });

      handleNewAuthor();
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
                    <InputLabel htmlFor="username">Name</InputLabel>
                    <Input
                      id="username"
                      error={error.name}
                      value={name}
                      onChange={e => setName(e.target.value)}
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
                      type="password"
                      onChange={e => setPassword(e.target.value)}
                    />
                  </FormControl>
                </div>

                <div className="input-single">
                  <FormControl>
                    <InputLabel htmlFor="password">Confirm Password</InputLabel>
                    <Input
                      id="password"
                      error={error.passwordConfirm}
                      value={passwordConfirm}
                      type="password"
                      onChange={e => setPasswordConfirm(e.target.value)}
                    />
                  </FormControl>
                </div>

                <FormControl component="fieldset">
                  <FormLabel component="legend">Type Account</FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={type}
                    onChange={handleChangeType}
                  >
                    <div className="d-flex">
                      <FormControlLabel
                        value="author"
                        control={<Radio />}
                        label="Author"
                      />
                      <FormControlLabel
                        value="leitor"
                        control={<Radio />}
                        label="Leitor"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>

                <Button
                  variant="contained"
                  type="submit"
                  color="secondary"
                  className={classes.button}
                >
                  Register
                </Button>

                <Link to="/" className="link-cad">
                  Back
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
