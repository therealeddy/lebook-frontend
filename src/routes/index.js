import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import { Main, Login, Register } from 'App/pages';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" isPrivate={false} component={Login} />
      <Route path="/register" isPrivate={false} component={Register} />
    </Switch>
  );
}
