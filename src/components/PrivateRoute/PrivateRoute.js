import React, {useEffect, useState} from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from './../Hook/useAuth';
// import Loader from "react-loader-spinner";

const PrivateRoute = ({ children, ...rest }) => {
    // const { children, ...rest } = props;
    const { user } = useAuth();

    if(user === null){
     /*  return (
          <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
          />
      ); */
    }

    return (
        <Route
        {...rest}
          render = { ( { location } ) => user.email ? children :
          <Redirect
           to = {{
               pathname: '/login',
               state : { from : location }
            }}
          ></Redirect> }
        >

        </Route>
    );
};

export default PrivateRoute;