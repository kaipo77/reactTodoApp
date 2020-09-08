import React from 'react';
import './style.css';

export default class TodoItem extends React.Component{
    render() {
        const {todo} = this.props;
        return (
            <div className = {'todoItem' + (todo.completed ? ' completed' : '' )} onClick={this.toggleTodo}>
                {todo.text}
            </div>
        )
    }
    toggleTodo = () => {
        this.props.updatetodofn(this.props.todo);
    }
}