import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import TodoItem from './component/TodoItem.js';
import TodoForm from './component/TodoForm.js';

class TodoList extends React.Component {
    constructor() {
        super();
        this.changeStatus = this.changeStatus.bind(this);//in order to acess this in custom method
        this.updateTask = this.updateTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.state = {
            tasks: [
                {
                    name: "Buy Milk",
                    completed: false
                },
                {
                    name: "Study",
                    completed: false
                },
                {
                    name: "Meal 5",
                    completed: false
                }
            ],
            currentTask: ''
        }
    }

    changeStatus(index) {//custom method where this value is changed and so we cannot acess this.state
        console.log(this.state.tasks[index]);
        var tasks = this.state.tasks;//making a copy
        var task = tasks[index];
        task.completed = !task.completed;
        this.setState({
            tasks: tasks
        })
    }

    updateTask(newValue) {//method to modify the current task
        //here newValue is an event so we will target its value
        this.setState({
            currentTask: newValue.target.value
        });
    }

    addTask(e) {//method to modify the current task
        //here newValue is an event so we will target its value
        e.preventDefault();
        let tasks = this.state.tasks;
        let currentTask = this.state.currentTask;//defining current task var 
        tasks.push({
            name: currentTask,
            completed: false
        })

        this.setState({
            tasks: tasks
        })
    }

    render() {
        return (
            <section>
                <TodoForm
                    djCurrentTask={this.state.currentTask} djUpdating={this.updateTask} djAddTask={this.addTask} />
                <ul>
                    {
                        this.state.tasks.map((dname, index) => {//in map AFn method we are passing index via prop
                            return <TodoItem djhasClick={this.changeStatus} djIndex={index} djdetails={dname} key={index} />
                        })
                    }
                </ul>
            </section>
        );

    }
}

ReactDOM.render(<TodoList />, document.getElementById('root'));