import React, { Component } from 'react';
import { Home } from 'components'
import { Link, Redirect, Route, withRouter } from 'react-router-dom';
import { connect }  from 'react-redux'


class HomeContainer extends Component {
  constructor(props){
    super(props)
    
    this.wtf = this.wtf.bind(this)
  }
  wtf() {
    console.log('gaga', this.props)
    this.props.isAuth === true
      ? this.props.history.push('/feed')
      : null//this.props.history.push('/authenticate')
  }
  componentWillMount() {
    this.wtf()
  
  }

  render() {
    console.log('gagagagag')
    return (
      <div>
        <Home />
      </div>
    );
  }
}

function mapStateToProps({users}) {
  return users
}

export default connect(mapStateToProps)(HomeContainer)

// export default HomeContainer;