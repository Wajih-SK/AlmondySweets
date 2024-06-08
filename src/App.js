import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Footer from './components/footer';
import Home from './components/home';
import CustomNavbar from './components/navbar';
import Gallery from './components/Gallery';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/Contact';

function App() {
  return (

    <Router>
        
        <CustomNavbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/gallery' component={Gallery} />
          {/* <Route path='/media' component={Media} /> */}
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer />
      
      </Router>
    
  );
}

export default App;
