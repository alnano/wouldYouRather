import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'

const ProtectedRoutes = ({component:Component, ...rest, isAuth}) => (
    <Route {...rest} render={(props) => (
      isAuth === true
      ? <Component {...props} />
      : <Redirect to='/authenticate' />
        )} 
      /> // render takes a function
  
);

function mapStateToProps({ users }) {
  return users;
}



export default connect(mapStateToProps)(ProtectedRoutes)