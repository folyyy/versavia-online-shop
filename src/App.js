import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
// import Men from './components/pages/Men';
import New from './components/pages/New';
// import Sale from './components/pages/Sale';
// import Women from './components/pages/Women';
import Item from './components/pages/Item';
 
// import './App.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/home' component={Home}/>
          {/* <Route exact path='/men' component={Men}/> */}
          <Route exact path='/new' component={New}/>
          {/* <Route exact path='/sale' component={Sale}/> */}
          {/* <Route exact path='/women' component={Women}/> */}
          <Route exact path='/item/:id' component={Item}/>
          <App />
        </Switch>
      </div>
    )
  }
}

export default App
