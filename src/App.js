import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route'

// Imported Components
import About from './components/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact render = {
              () => {
                return (<h1>Welcome to Stories</h1>);
              }}>
          </Route>

          <Route path="/about" exact component = {About}>
          </Route>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
