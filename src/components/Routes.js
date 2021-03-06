/* @flow */
import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Counter from './pages/Counter'
import Header from './molecules/Header'

export default function Routes() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/counter" exact component={Counter} />
      </Switch>
    </Fragment>
  )
}
