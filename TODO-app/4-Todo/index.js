import React from 'react';
import { render } from 'react-dom';
import ToDo from './components/ToDo';


const tasksList = ["Task1", "Task2", "Task3"];

const App = () => (
  <div>
    <ToDo tasksList={tasksList} />
  </div>
);

render(<App />, document.getElementById('todo'));
