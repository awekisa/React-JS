import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Books from './components/Books'
import BookDetails from './components/BookDetails'
import Authors from './components/Authors'
import Author from './components/Author'
import NotFoundPage from './components/NotFoundPage'


const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/books' component={Books} />
    <Route path='/books/:id' component={BookDetails} />
    <Route exact path='/authors' component={Authors} />
    <Route exact path='/authors/:id' component={Author} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default Routes
