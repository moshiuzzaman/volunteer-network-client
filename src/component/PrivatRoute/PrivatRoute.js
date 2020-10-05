import {
  Route,
  Redirect,
} from "react-router-dom";
import React, { useContext } from 'react';
import { AllContext } from "../../App";

const PrivatRoute = ({ children, ...rest }) => {
  const [allStates] = useContext(AllContext)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        allStates.email ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
};

export default PrivatRoute;