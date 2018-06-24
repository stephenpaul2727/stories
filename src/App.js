import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
// Imported Components
import About from './components/About';
import Home from './components/Home';
import PostForm from './components/PostForm';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component = {Home}></Route>
          <Route path="/about" exact component = {About}></Route>
          <Route path="/newpost" exact component = {PostForm}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
