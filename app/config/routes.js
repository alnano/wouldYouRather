import React from 'react'
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom'
import { MainContainer, HomeContainer, FeedContainer } from '../containers'
// import { ProtectedRoute } from '../components/Navagation/Navagation'
// import { ProtectedRoute } from '../containers/Main/MainContainer' // sample
import  ProtectedRoutes  from '../config/ProtectedRoute'

const routes = (
  <BrowserRouter>
    <MainContainer>
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <ProtectedRoutes path='/authenticate' component={HomeContainer} />
        <ProtectedRoutes path='/feed' component={FeedContainer} />
      </Switch>
    </MainContainer>
  </BrowserRouter >
)

export default routes 