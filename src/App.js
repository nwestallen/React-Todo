import React from 'react';
import TodoList from './/components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDo: [{task: 'Organize Garage', id: 1234, completed: false}, {task: 'Finish project', id: 3456, completed: false}],
      animal: 'Cat'
    };
  }

  addItem = item => {
    //const item = {task:'tst', id: 4444, completed: false};
    this.setState({
      ...this,
      toDo: [...this.state.toDo, item]
    })
  };

  toggleComplete = item => {
    this.setState({
      ...this,
      toDo: this.state.toDo.map(toDoItem => (toDoItem.id === item.id ? {...item, completed: !item.completed}: toDoItem))
    })
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      ...this,
      toDo: this.state.toDo.filter(toDoItem => toDoItem.completed === false)
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted}/>
        <TodoList toDo={this.state.toDo} toggleComplete={this.toggleComplete} />
      </div>
    );
  }
}

export default App;
