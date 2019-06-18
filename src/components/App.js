import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import Home from './Home'
import Information from './Information'
import Media from './Media'
import Location from './Location'
import Form from './Form'

function App() {
  return (
    <div >
      <Navigation />
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Information" component={Information} />
          <Route path="/Media" component={Media} />
          <Route path="/Location" component={Location} />
          <Route path="/Form" component={Form} />
          <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
