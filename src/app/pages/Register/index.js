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
  const [role, setRole] = useState('');

  const [error, setError] = useState({
    password: false,
    username: false,
    name: false,
    passwordConfirm: false,
    role: false
  });

  const classes = useStyles();
  const dispatch = useDispatch();

  function toast(notify, type) {
    dispatch(setToast(notify, type));
  }

  const handleCreateUser = async e => {
    const exist = await api.get(`/users/${username}`);

    if (exist.data[0]) {
      toast('User already exist!', 'error');
      return;
    }

    const result = await api.post('/users', {
      username,
      name,
      password,
      role
    });

    if (result.data) {
      toast('User successfully registered!', 'success');
      props.history.push('/login');
    } else {
      toast('An error has occurred, please try again!', 'error');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!username || !password || !name || !passwordConfirm || !role) {
      setError({
        username: !username,
        password: !password,
        name: !name,
        passwordConfirm: !passwordConfirm,
        role: !role
      });

      toast('Fill in all fields!', 'warn');

      return;
    } else {
      if (password !== passwordConfirm) {
        setError({
          ...error,
          password: true,
          passwordConfirm: true
        });

        toast('Passwords do not match!', 'warn');
      } else {
        setError({
          password: false,
          username: false,
          name: false,
          passwordConfirm: false,
          role: false
        });

        handleCreateUser();
      }
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
                    value={role}
                    onChange={e => setRole(e.target.value)}
                  >
                    <div className="d-flex">
                      <FormControlLabel
                        value="author"
                        control={<Radio />}
                        label="Author"
                      />
                      <FormControlLabel
                        value="reader"
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
