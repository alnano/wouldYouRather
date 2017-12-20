import firebase from 'firebase'
import firebaseui from 'firebaseui'

const config = {
  apiKey: "AIzaSyCi9_jkdNkYv1ch7nYw-4ow7ttvVUFN074",
  authDomain: "would-you-rather-e552b.firebaseapp.com",
  databaseURL: "https://would-you-rather-e552b.firebaseio.com",
  projectId: "would-you-rather-e552b",
  storageBucket: "would-you-rather-e552b.appspot.com",
  messagingSenderId: "279938869242"

};


// export var uiConfig = {
//   signInSuccessUrl: '/feed', //idk lets see
//   signInOptions: [
//     // Leave the lines as is for the providers you want to offer your users.
//     firebase.auth.FacebookAuthProvider.PROVIDER_ID,  
//   ],
  // Terms of service url.
//   tosUrl: '<your-tos-url>'
// };
firebase.initializeApp(config);
export const provider = new firebase.auth.FacebookAuthProvider();
export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth()
//make function that on sing in yada yada yada 