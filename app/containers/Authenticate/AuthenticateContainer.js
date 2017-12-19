import React, { Component } from 'react';
import { FirebaseAuth } from 'react-firebaseui'; 
import { firebaseAuth, ui, uiConfig } from 'config/constants'
import firebase from 'firebase'

class AuthenticateContainer extends Component {
  constructor(props){
    super(props)
    this.signIn = this.signIn.bind(this)
    this.signOut = this.signOut.bind(this)
  }
  signIn(){
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result){
      console.log(result)
    })
    .catch(function(error){
      console.log(error)
    })
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

export default AuthenticateContainer;