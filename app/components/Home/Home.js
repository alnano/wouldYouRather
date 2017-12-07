import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { container, title, slogan } from './styles.css'
class Home extends Component {
  render() {
    return (
      <div className={container}>
        <p className={title}>{'Would You Rather'}</p>
        <p className={slogan}>{'The 1000 year old american classic'}</p>
      </div>
    );
  }
}

Home.propTypes = {

};

export default Home;