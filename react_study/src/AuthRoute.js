import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute({ authenticated, component: Component, render, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => //component 대신 render사용, 함수 사용 가능
        authenticated ? (
          render ? render(props) : <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/', state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default AuthRoute;