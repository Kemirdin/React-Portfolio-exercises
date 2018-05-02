import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.djAddTask}>
            <input type="text" value={props.djCurrentTask} onChange={props.djUpdating} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default TodoForm;
