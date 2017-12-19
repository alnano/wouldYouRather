//action creators on auth / users

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
  }
}

const isFetchingSuccess = (uid, user, authId) => {
  return {
    type: IS_FETCHING_SUCCESS,
    uid,
  }
}

const isFetchingError = (error) => {
  return {
    type: IS_FETCHING_ERROR,
    uid,
  }
}

const authUser = (uid, user, authId) => {  // add timestamp?
  return {
    type: AUTH_USER,
    uid,
    user,
  }
}

const initialState = {
  isFetching: false,
  isAuth: false,
  //isAuth
}

const users = (state = initialState, action) => {
  switch(action.type) {
    // case // 1
    //   return {

    //   }
      default: 
        return state

    }

}

export default users