import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HeadNav from './HeadNav';

import Home from '../pages/Home';
import Spiele from '../pages/Spiele';
import Datenschutz from '../pages/Datenschutz';
import Impressum from '../pages/Impressum';

const App = () => {

  return (
    <Router>
      <div className="App">
      <HeadNav />
      <Switch>
        <Route exact strict path="/" component={Home} />
        <Route exact strict path="/spiele" render={() =>     <Spiele />}/>
        <Route exact strict path="/datenschutz" component={Datenschutz} />
        <Route exact strict path="/impressum" component={Impressum} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
