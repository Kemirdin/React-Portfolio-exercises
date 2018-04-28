import React from 'react';

/*
class TodoItem extends React.Component{
  render(){
    return(
      <li onClick = { ()=>{
          this.props.djhasClick(this.props.djIndex); 
        }} className={this.props.djdetails.completed ? 'completed' : ''}>
        {this.props.djdetails.name}
      </li>  
    );
  }
}
*/

const TodoItem = (props) => {//in statless fn there is no vlaue of this and prop is passed as parameter
    return (
        <li onClick={() => {
            props.djhasClick(props.djIndex);
        }} className={props.djdetails.completed ? 'completed' : ''}>
            {props.djdetails.name}
        </li>
    );

}

export default TodoItem;