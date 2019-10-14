import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const logged = !!localStorage.getItem('@Lebook:TOKEN');

  if (!logged && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (logged && !isPrivate) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} render={props => <Component {...props} />} />;
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isPrivate: PropTypes.bool
};

RouteWrapper.defaultProps = {
  isPrivate: true
};
