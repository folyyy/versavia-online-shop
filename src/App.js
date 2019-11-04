import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Men from './components/pages/Men';
import New from './components/pages/New';
import Sale from './components/pages/Sale';
import Women from './components/pages/Women';
import Item from './components/pages/Item';
 
// import './App.css';

function App() {
  const App = () => (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/men' component={Men}/>
        <Route exact path='/new' component={New}/>
        <Route exact path='/sale' component={Sale}/>
        <Route exact path='/women' component={Women}/>
        <Route exact path='/item/' component={Item}/>
      </Switch>
    </div>
  )
  return (
    <Switch>
    <App/>
    </Switch>
  );
}

export default App;
