import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: '',
            id: '',
            completed: false
        }
    };

    handleChange = e => {
        const newTask = e.target.value;
        const newID = Date.now();
        this.setState({
            task: newTask,
            id: newID,
            completed: false
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state);
    }

    render() {
        return(
            <div>            
                <form onSubmit={this.handleSubmit}>
                    <label>
                        To Do
                        <input type='text' name='task' value={this.state.task} onChange={this.handleChange}/>
                    </label>
                    <button>Add</button>
                </form>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>

        )
    };
};

export default TodoForm;