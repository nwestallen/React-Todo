import React from 'react';
import styled from 'styled-components';
import './Todo.css'

const ToDoTask = styled.div`
    color: blue;
    margin: 10px;
`;

class Todo extends React.Component {

    handleClick = e => {
        this.props.toggleComplete(this.props.toDo);
    };

    render() {
        return <ToDoTask onClick={this.handleClick} className={(this.props.toDo.completed ? 'completed' : '')}>{this.props.toDo.task}</ToDoTask>
    }
}

export default Todo;