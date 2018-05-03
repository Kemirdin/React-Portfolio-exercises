import React from 'react';
import AddTask from './AddTask';
import TasksList from './TasksList';

export default class ToDo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: this.props.tasksList
        }

        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    addTask(task) {
        let updatetTasksList = this.state.tasks;

        updatetTasksList.push(task);

        this.setState({
            tasks: updatetTasksList
        });
    }

    removeTask(task) {
        let updatetTasksList = this.state.tasks;

        updatetTasksList.splice(updatetTasksList.indexOf(task), 1);

        this.setState({
            tasks: updatetTasksList
        });
    }

    render() {
        return (
            <div>
                <h1>ToDo app</h1>
                <AddTask addTask={this.addTask} />
                <TasksList tasks={this.state.tasks} removeTask={this.removeTask} />
            </div>
        )
    }
}