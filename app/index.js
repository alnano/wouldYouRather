import ReactDom from 'react-dom'
import React, { Component } from 'react';
import routes from './config/routes'


ReactDom.render(
  routes,
  document.getElementById('app')
)