import React from 'react';
import TodoItem from '../TodoItem/todoitem';

export default class TodoList extends React.Component{
    render() {
        const {todos} = this.props;
        return (
            <div className="todolistContainer">
                {
                    todos.map( (_todo, _index) => {
                        return(
                            <TodoItem updatetodofn= {this.updateTodo} key={_index} todo = {_todo}></TodoItem>
                        )
                    })
                }
            </div>
        )
    }

    updateTodo = (todo) => {
        this.props.updateTodofn(todo);
    }
}