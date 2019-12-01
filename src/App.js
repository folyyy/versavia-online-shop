import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home'
import New from './components/pages/New'
import Men from './components/pages/Men'
import Women from './components/pages/Women'
import Sale from './components/pages/Sale'
import Item from './components/pages/Item'
import Admin from './components/pages/Admin'
import Purchases from './components/pages/Purchases'
import Cart from './components/pages/Cart'
import Checkout from './components/pages/Checkout'
import Successful from './components/pages/Successful'


export class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/new' component={New}/>
          <Route exact path='/men' component={Men}/>
          <Route exact path='/women' component={Women}/>
          <Route exact path='/sale' component={Sale}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path='/item/:id' component={Item}/>
          <Route exact path='/checkout' component={Checkout}/>
          <Route exact path='/admin' component={Admin}/>
          <Route exact path='/admin/purchases' component={Purchases}/>
          <Route exact path='/successful' component={Successful}/>
          <Route
                component={() => (
                  <div style={{ padding: 20 }}>Page not found</div>
                )}
              />
          <App />
        </Switch>
      </div>
    )
  }
}

export default App
