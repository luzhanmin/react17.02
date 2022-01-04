import './App.css';

import React, { Component } from 'react'
import Header from './components/Header';
import List from './components/List';
export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header/>
        <List/>
      </div>
    )
  }
}

