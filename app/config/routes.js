import React from 'react'
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom'
import { MainContainer, HomeContainer } from '../containers'
// import { ProtectedRoute } from '../components/Navagation/Navagation'
import { ProtectedRoute } from '../containers/Main/MainContainer'

const routes = (
  <BrowserRouter>
    <MainContainer>
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <ProtectedRoute path='/authenticate' component={HomeContainer} />
      </Switch>
    </MainContainer>
  </BrowserRouter >
)

export default routes 