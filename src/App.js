import React, { Component } from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

class App extends Component {
    
  render() {
    
    return (
  
      <div ClassName="App">     
   

    <Route exact path="/" component={Home} />

    <Route path="/contact" component={Contact} />

    <Route path="/about" component={About} />
   
    
  </div>);
  }
};

export default App;
