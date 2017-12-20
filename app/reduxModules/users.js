//action creators on auth / users
import firebase from 'firebase'
import { firebaseAuth, provider } from 'config/constants'
const CHECK_USER = 'CHECK_USER'
const IS_FETCHING = 'IS_FETCHING'
const IS_FETCHING_SUCCESS = 'IS_FETCHING_SUCCESS'
const IS_FETCHING_ERROR = 'IS_FETCHING_ERROR'
const AUTH_USER = 'AUTH_USER'
const UNAUTH_USER = 'UNAUTH_USER'

const checkUser = (uid) => {
  return {
    type: CHECK_USER,
    uid,
  }
}

const isFetching = () => {
  return {
    type: IS_FETCHING,
    uid,
    isFetching,
  }
}

const isFetchingSuccess = (uid, user, authId) => {
  return {
    type: IS_FETCHING_SUCCESS,
    uid,
    user,
    isFetching,
  }
}

export const isFetchingError = (error) => {
  return {
    type: IS_FETCHING_ERROR,
    error: 'error fetching users'
  }
}

export const authUser = (uid, user, authId) => {  // add timestamp?
  return {
    type: AUTH_USER,
    uid,
    user,
  }
}

const unAuthUser = (uid, user, authId) => {
  return {
    type: UNAUTH_USER,
    uid,
    authid,
    user,
  }
}
const initialState = {
  isFetching: false,
  isAuth: false,
  isFetching: false,
  uid: '',
  error: '',
  authId: '',
}
//unauth user
export function signInFlow(){
  return function action(dispatch){     // refactor 
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

const users = (state = initialState, action) => {
  switch(action.type) {
    case CHECK_USER: 
      return {
        ...state,
        uid: action.uid
      }
    case IS_FETCHING:
      return{
        ...state,
        uid: uid,
        isFetching: true,
      }
    case IS_FETCHING_SUCCESS: // can be if/else
      return {
        ...state,
        uid: uid,
        isFetching: false,
      }
    case IS_FETCHING_ERROR:
      return {
        ...state,
        uid: uid,
        isFetching: false,
        error: 'error fetcgagfd user'
      }
    case AUTH_USER:
      return {
        ...state,
        uid: uid,
        authId: action.authId,
      }
    
      
      default: 
        return state

    }

}

export default users
// auth user yes ? no ? error 
//send fetching yes ? no ? failure // from firebase?


//thunk set up and dispatch 