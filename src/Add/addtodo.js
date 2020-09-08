import React from 'react';

export default class AddTodo extends React.Component{

    constructor(){
        super();
        this.state = {
            todo : [{text : 'study python', completed : true}]
        };
    };

    render() {
        return (
            <div className = 'addtodoContainer'>
                <form onSubmit ={(e) => this.submitTodo(e)}>
                    <input type="text" onChange={(e) => this.updateInput(e)}></input>
                    <button type="submit" >ADD Todo</button>
                </form>
            </div>
        )
    }
    updateInput = (e) => {
        this.setState({ todo : e.target.value });
    }

    submitTodo = (e) => {
        e.preventDefault();
       this.props.addtodofn(this.state.todo)
    }
}