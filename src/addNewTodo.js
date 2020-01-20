import React, { Component } from 'react';

class addNewTodo extends Component {

  state = {
    inputTitle: ''
  }
  inputRef

  onChangeInInput = (event) => {
    this.setState({
      inputTitle: event.target.value,
    })
  }

  onClickButton = (event) => {
    const { todos, addNewTodoRender } = this.props;
    this.addNewTodos(todos);
    addNewTodoRender(todos);
  }
  addNewTodos = (todos) => {
    if (this.state.inputTitle !== '') {
      const newTodo = {
        list: this.state.inputTitle,
        nestedlistArray: [
        ]
      }
      todos.push(newTodo);
      this.inputRef.value = '';
    }
  }

  render() {

    console.log("from addnewtodo");
    return (
      <div class="addNewTodoListDiv">
        <input type="text" name="name" ref={r => {
          this.inputRef = r
        }} onChange={this.onChangeInInput} id="addNewTodoListInput" />
        <input
          onClick={this.onClickButton}
          type="submit"
          value="ADD" id="addNewTodoListButton" />
      </div>
    )
  }
}

export default addNewTodo;