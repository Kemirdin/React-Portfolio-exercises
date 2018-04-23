import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    //How to title
    // const title = 'This is K3M1RD1N\'s app';
    // const anotherTitle = 'Another title';
    // make list
    const list=[
      'Item1',
      'Item2',
      'ItemAnother'
    ];
    return (
      <div className="App">
        <h1>{
          // true ? anotherTitle:title
          list.map(Item => {
            return (
              <div>{Item}</div>
            );
            
})
        }</h1>
      </div>
    );
  }
}

export default App;
