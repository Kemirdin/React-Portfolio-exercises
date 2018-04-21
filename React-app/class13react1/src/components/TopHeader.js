import React, { Component } from 'react'; 
import logo from '../logo.svg';

class TopHeader extends Component{
    render() {
        const header = 'React Class 13 Post';
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">{header}</h1>
            </header>
        );
    }
}

export default TopHeader;