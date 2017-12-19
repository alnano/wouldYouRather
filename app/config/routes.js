import React from 'react'
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom'
import { MainContainer, HomeContainer, FeedContainer, AuthenticateContainer } from '../containers'
import { Authenticate } from '../components'
// import { ProtectedRoute } from '../components/Navagation/Navagation'
// import { ProtectedRoute } from '../containers/Main/MainContainer' // sample
import  ProtectedRoutes  from '../config/ProtectedRoute'

const routes = (
  <BrowserRouter>
    <MainContainer>
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route path='/authenticate' component={AuthenticateContainer} /> 
        <ProtectedRoutes path='/feed' component={FeedContainer} />
      </Switch>
    </MainContainer>
  </BrowserRouter >
)
//auth to protected route ?
export default routes 