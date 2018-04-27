import { SSL_OP_PKCS1_CHECK_1 } from 'constants';

var React = require('react');
var ReactDOM = require('react-dom');

//Create TodoComponent

var TodoComponent = React.createClass({
    render :function () {
        return (
            <h1>Hello</h1>
        );
        
    }
     
});

//Create Component info html pages
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));