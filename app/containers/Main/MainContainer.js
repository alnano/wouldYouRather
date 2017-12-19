import React, { Component } from 'react';
import { Navagation }from 'components';
import { connect } from 'react-redux'
import { Link, Redirect, Route, withRouter } from 'react-router-dom';


//make sure im logged via facebook
const fakeAuth = {
  isAuthenticated: false,    //mock controls nav state
  func(cb){
    return cb
  },  
  authenticate(cb) {
    console.log('thisss', this)
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signOut(cb) {
    console.log('in herer', this)
    this.authenticate = false
    setTimeout(cb, 100) // fake async
  }
}

export const ProtectedRoute = ({ component: Component, ...rest }) => (
   <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
    // this.props.isAuth === true
      ? <Component {...props} />
      : <Redirect to='/authenticate' />
  )} />
  
)

class MainContainer extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    // console.log('>>>>', this.props.isAuth)
    // this.props.isAuth === true
    // ?<Redirect to='/feed' />
    // :null
  }
   render() {
    return (
      <div>
        <Navagation isAuth={fakeAuth.isAuthenticated}/>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps({users}) {
  return users;
}

export default withRouter(connect(mapStateToProps)(MainContainer))

// const mySpecialContainerCreator = connect(mapStateToProps);

// export const FirstConnectedComponent = mySpecialContainerCreator(Protet);