import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentList from './components/CommentList';
import PostBody from './components/PostBody';
import TopHeader from './components/TopHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopHeader/>
        <PostBody/>
        <CommentList/>
      </div>
    );
  }
}

export default App;