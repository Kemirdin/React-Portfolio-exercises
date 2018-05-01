import React from "react";
// import Crypto from "crypto";
import { InputAddTodo, TodoItem, FilterButton } from "./components";

export default class TodoApp extends React.Component {
    state = {
        todoList: [],
        filter: "all"
    };

    addTodo = todo => {
        // console.log('addTodo', todo)
        const item = {
            id: Math.random().toString(36).substring(7),
            // id: Crypto.randomBytes(20).toString("hex"),
            name: todo,
            isDone: false
        };

        this.setState({
            todoList: [...this.state.todoList, item]
        });
    };

    deleteTodo = index => {
        this.setState({
            todoList: this.state.todoList.filter((ele, i, filter) => ele.id !== index)
        });
    };

    changeSts = _item => {
        const { todoList } = this.state;
        this.setState({
            todoList: todoList.map(item => (item.id === _item.id ? _item : item))
        });
    };

    setFilter = e => {
        this.setState({
            filter: e
        });
    };

    todoListWithFilter = () => {
        const { todoList, filter } = this.state;
        // console.log("todo state variable=>", todoList, filter);
        return filter === "all"
            ? todoList
            : todoList.filter(data => filter === data.isDone);
    };

    render() {
        // console.log('TodoState', this.state)
        const { todoList, filter } = this.state;
        console.log("todoList=>", this.todoListWithFilter());
        return (
            <div>
                <InputAddTodo label="Todo นะ" onAdd={this.addTodo} />
                {this.todoListWithFilter().map((todo, index) => (
                    <TodoItem
                        index={todo.id}
                        todoLabel={todo.name}
                        isDone={todo.isDone}
                        onDelete={this.deleteTodo}
                        clickTodo={this.changeSts}
                    />
                ))}
                <br />
                <FilterButton filtering={this.setFilter} />
            </div>
        );
    }
}
