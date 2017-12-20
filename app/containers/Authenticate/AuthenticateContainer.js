import React, { Component } from 'react';
import { firebaseAuth, provider} from 'config/constants'
import firebase from 'firebase'
import { connect }from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from 'reduxModules/users'


class AuthenticateContainer extends Component {
  constructor(props){
    super(props)
    this.signIn = this.signIn.bind(this)
    this.signOut = this.signOut.bind(this)
  }
  signIn(){
    // firebase.auth().signInWithPopup(provider)
    // .then(function(result){
    //   console.log(result)
    // })
    // .catch(function(error){
    //   console.log(error)
    // })
    this.props.action.signInFlow()
    
  }
  signOut(){
    firebase.auth().signOut().then(function (result) {
      // Sign-out successful.
      console.log(result)
    }).catch(function (error) {
      // An error happened.
      console.log(error)
    });
  }
  render() {
    console.log('+++++++', this.props)
    return (
      <div className='auth'>
        <button onClick={this.signIn}>tt</button>
        <button onClick={this.signOut}>gd</button>
        {/* <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth} /> */}
        <h1>wttf</h1>
      </div>
    );
  }
}

function mapStateToProps({users}){
  return users;
}
function mapDispatchToProps(dispatch) {
  return {action: bindActionCreators(actionCreators, dispatch)}
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateContainer)
//hook up to redux 
// pass down to auth container 
// 