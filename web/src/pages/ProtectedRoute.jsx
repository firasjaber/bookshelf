import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext/AuthState';

const ProtectedRoute = ({ component: Component }) => {
  const { token } = useContext(AuthContext);
  return (
    <Route
      render={props => {
        if (token) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
