import React from 'react';

class TodoForm extends React.Component {

    render() {
        return(
            <form>
                <label>
                    To Do
                    <input type='text' />
                </label>
                <button>Add</button>
            </form>
        )
    }
};

export default TodoForm;