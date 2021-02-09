import React from 'react';

class Todo extends React.Component {
    render() {
        return <p>{this.props.toDo.task}</p>
    }
}

export default Todo;