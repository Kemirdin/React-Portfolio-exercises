import React from "react";
import { render } from "react-dom";
import TodoForm from "./TodoForm";
import { Todo, TodoList } from "./TodoList";
import Title from "./title";
const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

//Notes
// addTodo function --> TodoForm
// onclick receives the function
// onclick --> anon func --> adds to todo data list
window.id = 0;
class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    addTodo(val) {
        /* NOTE: addTodo func */
        // test to see if val is reaching top most function
        var temp = { text: val, id: id++ };
        this.state.data.push(temp);
        this.setState({ data: this.state.data });
    }

    remove(id) {
        /* NOTE: remove func */
        var currentList = this.state.data.splice();
        var remainder = currentList.filter((item) => {
            if (item.id !== id) { return item; }
        })
        this.setState({ data: remainder })
    }

    render() {
        return (
            <div style={styles}>
                <Title />
                <TodoForm addTodo={this.addTodo.bind(this)} />
                <TodoList todos={this.state.data} remove={this.remove.bind(this)} />
            </div>
        );
    }
}

render(<TodoApp />, document.getElementById("root"));
