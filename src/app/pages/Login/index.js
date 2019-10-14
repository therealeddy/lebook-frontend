import React, { useState } from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { setToast } from '~/store/models/toast/actions';
import { useDispatch } from 'react-redux';
import api from '~/services/api';

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: '#F29D16',
    '&:hover': {
      backgroundColor: '#F29D16'
    }
  }
}));

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    password: false,
    username: false
  });

  const dispatch = useDispatch();
  const classes = useStyles();

  function toast(notify, type) {
    dispatch(setToast(notify, type));
  }

  const handleLogin = async e => {
    const user = await api.get(`/authentication/${username}/${password}`);

    if (!user.data[0]) {
      toast('User not found!', 'error');
      return;
    }

    localStorage.setItem('@Lebook:TOKEN', JSON.stringify(user.data[0]));

    toast('Welcome! =D', 'success');

    props.history.push('/');
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!username || !password) {
      setError({
        username: !username,
        password: !password
      });

      toast('Fill in all fields!', 'warn');

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
            <form onSubmit={handleSubmit}>
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
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
