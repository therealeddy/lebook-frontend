import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { makeStyles } from '@material-ui/core/styles';
import { setToast } from '~/store/models/toast/actions';
import { useDispatch } from 'react-redux';
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel
} from '@material-ui/core';
import api from '~/services/api';

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: '#F29D16',
    '&:hover': {
      backgroundColor: '#F29D16'
    }
  }
}));

export default function Register(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [type, setType] = useState('');

  const [error, setError] = useState({
    password: false,
    username: false,
    name: false,
    passwordConfirm: false,
    type: false
  });

  const classes = useStyles();
  const dispatch = useDispatch();

  function toast(notify, type) {
    dispatch(setToast(notify, type));
  }

  const handleNewAuthor = async e => {
    const exist = await api.get(`/users/${username}`);

    if (exist.data[0]) {
      toast('Usuário já existente!', 'error');
      return;
    }

    const result = await api.post('/users', {
      username,
      name,
      password,
      type
    });

    if (result.data) {
      toast('Usuário cadastrado, faça o login!', 'success');
      props.history.push('/login');
    } else {
      toast('Ocorreu algum erro, tente novamente mais tarde! :(', 'error');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!username || !password || !name || !passwordConfirm || !type) {
      setError({
        username: !username,
        password: !password,
        name: !name,
        passwordConfirm: !passwordConfirm,
        type: !type
      });

      toast('Preencha todos os campos!', 'warn');

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
            <form onSubmit={handleSubmit}>
              <div className="form">
                <FormControl component="fieldset" className="mt-5">
                  <FormLabel component="legend">Type Account</FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={type}
                    onChange={e => setType(e.target.value)}
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
                        label="Reader"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
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

                <Button
                  variant="contained"
                  type="submit"
                  color="secondary"
                  className={classes.button}
                >
                  Register
                </Button>

                <Link to="/login" className="link-cad">
                  Back
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
