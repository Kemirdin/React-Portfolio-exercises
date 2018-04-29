import React from "react";

const Todo = ({ todo, remove }) => {
    return (
        <li
            onClick={() => {
                remove(todo.id);
            }}
        >
            {todo.text}
        </li>
    );
}

const TodoList = ({ todos, remove }) => {
    var nodeList = todos.map(node => {
        return <Todo todo={node} remove={remove} />;
    });

    return <ul> {nodeList} </ul>;
};

export { Todo, TodoList };
