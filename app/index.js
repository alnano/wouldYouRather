import ReactDom from 'react-dom'
import React, { Component } from 'react';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// import { routerReducer, syncHistoryWithStore } from 'react-router-redux' //hasing and history?
import * as reducers from 'reduxModules'
import routes from './config/routes'
// const store = creatStore(combineReducers(reducers), compose(
//   applyMiddleware(thunk),
//   window.devToolsExtension ? window.devToolsExtension() : (f) => f //redux dev tool
// ))

const store = createStore(combineReducers(reducers), compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
))


ReactDom.render(
  <Provider store={store}>
    {routes}
  </Provider>,
    document.getElementById('app')
)
