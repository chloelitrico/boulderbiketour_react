import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import Home from './Home'
import Information from './Information'

function App() {
  return (
    <div >
      <Navigation />
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Information" component={Information} />
          <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
