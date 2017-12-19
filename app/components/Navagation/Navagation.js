import React, { Component } from 'react';
import { Link, Redirect, Route, NavLink, withRouter } from 'react-router-dom';
import { nav, lin, container } from './styles.css';
//conatiner
  //  home
  // action 
    //sing in
    // sign out
    // modal 
const Modal = () => {
  return (
    <button>modal</button>
  )
}

const NavLinks =({isAuth}) => {
  return isAuth === true
  ? <ul className={nav}>
      <li className={lin}> 
        <Link to='/'>{'HOME'}</Link>
      </li>
    </ul>
 : <ul className={nav}>
      <li className={lin}>
        <Link to='/'>{'HOME'}</Link>
      </li>
    </ul>
}

const ActionLinks = ({isAuth}) => {
  return isAuth === true 
    ? <ul className={nav}>
      <li className={lin}>
        <Link to='/'>{'LOGOUT'}</Link>
      </li>
      <li>
        <Modal />
      </li>
    </ul>
    : <ul className={nav}>
      <Link to='/authenticate'>{'Authenticate'}</Link>      
    </ul>
}

const Navagation = ({isAuth}) => {
  //isAuth prop mainContainer
  return (
    <div className={container}>
      <NavLinks isAuth={isAuth}/>
      <ActionLinks isAuth={isAuth} />
    </div>
  );
};

export default Navagation