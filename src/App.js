import React from 'react';
import TodoList from "./TodoList/todolist";
import TodoItem from "./TodoItem/todoitem";
import AddTodo from "./Add/addtodo";
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      todos : []
    }
  }
  render(){
    return(
      <div>
        {/* Hello from the app component
        <TodoItem></TodoItem> */}
        <AddTodo addtodofn ={this.addtodo}></AddTodo>
        <TodoList updateTodofn= {this.updateTodo} todos={this.state.todos}></TodoList>
        
      </div>
    )
  }
  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    if(todos){
      const savedtodos = JSON.parse(todos);
      this.setState({ todos : savedtodos });

    }else{
      console.log("no todos");
    }
  }

  componentDidUpdate = () => {

  }

  addtodo = async (todo) => {
    await this.setState({ todos: [...this.state.todos, { 
      text : todo,
      completed : false 
    }
  ]}
  );
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    console.log(this.state.todos)
  }

  updateTodo = async (todo) => {
    const newTodos = this.state.todos.map(_todo => {
      if(todo === _todo)
        return{
          text : todo.text,
          completed : !todo.completed
    }
      else 
        return _todo
    } );
    await this.setState({ todos : newTodos});
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }
}

export default App;
