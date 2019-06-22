import './App.css';
import React, { Component } from 'react'
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/> 
        <Footer/>
      </div>
    )
  }
}

export default App
