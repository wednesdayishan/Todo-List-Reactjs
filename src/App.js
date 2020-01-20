import React, { Component } from 'react';
import TodoItem from './TodoItem';
import AddNewTodo from './addNewTodo.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './App.css';

class App extends Component {

  state = {
    todos: [
      // { 
      //   list: 'This is Main List',
      //   nestedlistArray : [
      //     {item : 'this is the nested item in the list', isComplete : false},
      //     {item : 'this is the nested item in the list', isComplete : false}
      //   ]
      // },
      // { 
      //   list: 'This is Main List',
      //   nestedlistArray : [
      //     {item : 'this is the nested item in the list', isComplete : false},
      //     {item : 'this is the nested item in the list', isComplete : false}
      //   ]
      // }
    ],

    showComponent : false
  };

  render() {
    const { todos } = this.state;

    const onCheckChangedRender = () => {
      this.setState({
        todos : todos,
      })
    }
    const deleteRender = (todos) => {
      this.setState({
        todos : todos,
      })
    }
    const addNewTodoRender = () => {
      this.setState({
        todos : todos,
      })
    }
    const onClickNestedButtonRender =(todos) => {
      this.setState({
        todos : todos,
      })
    }

    console.log('This is the App render');
    return (
     <div id = "main">
       <h1> My Todo List </h1>
       <hr/>
       
        <AddNewTodo todos = {todos} addNewTodoRender = {addNewTodoRender}/>

        <ul>
          {todos.map((todo) => <TodoItem showComponent = {this.state.showComponent} todo = {todo} todos = {todos} onClickNestedButtonRender = {onClickNestedButtonRender} deleteRender = {deleteRender} onCheckChangedRender ={onCheckChangedRender}/>)}
        </ul>
      </div> 
    );
  }
}

export default App;
