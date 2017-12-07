import React, { Component } from 'react';
import { Navagation }from 'components';
import { Link, Redirect, Route } from 'react-router-dom';

const fakeAuth = {
  isAuthenticated: true,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signOut(cb) {
    this.authenticate = false
    setTimeout(cb, 100) // fake async
  }
}

export const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />

)


class MainContainer extends Component {
  render() {
    return (
      <div>
        <Navagation isAuth={fakeAuth.isAuthenticated}/>
        {this.props.children}
      </div>
    );
  }
}

export default MainContainer;
