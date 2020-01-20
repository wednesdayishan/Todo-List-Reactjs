import React, { Component } from 'react';
import NestedItem from './NestedItem.js';

class TodoItem extends Component {
  state = {
    showComponent : false,
    inputData : '',
  }
  
  onCheckChanged = (todo) => {
    todo.isComplete = !todo.isComplete;
  }
  onChangeListener = () => {
    const { todo, todos,  onCheckChangedRender} = this.props;

    onCheckChangedRender(this.onCheckChanged(todo, todos));
  };

  
  onClickItem = () => {
    this.setState({
      showComponent: !this.state.showComponent,
    });
  }
  onChangeInInputOfNestedItem = (event) => {
    this.setState({
      inputData : event.target.value,
    })
      // this.state.inputData = event.target.value;
  }
  onClickNestedButton = (event) => {
    const { todo, todos, onClickNestedButtonRender} = this.props;
    if(this.state.inputData !== ''){
      const newTodo = {
        item : this.state.inputData,
        isComplete : false,
      }
      todo.nestedlistArray.push(newTodo);
      this.refs.someName.value = '';
    }
    
    onClickNestedButtonRender(todos);
  }

  render() {

    console.log('This is the Todo render');
    const { todo, todos, deleteRender, onCheckChangedRender } = this.props;
    
    return (
        <li class = "todoListItem">
          <div class = "todoListItemContainer">
            <span onClick = {this.onClickItem} class = "todoListItemName">{todo.list}</span>
            {this.state.showComponent && <div class = "nestedListItemContainer">
              <div class = "nestedInputAndButtonContainer">
                <input type = "text" onChange={this.onChangeInInputOfNestedItem} ref="someName" class = "inputNewNestedItem"/>
                <input type = "submit" value = "Add" onClick ={this.onClickNestedButton} class = "buttonToAddNewNestedItem"/>
              </div>  
            {
              this.state.showComponent ? todo.nestedlistArray.map((nestedItem) => <NestedItem nestedItem = {nestedItem} todo = {todo} todos = {todos} deleteRender = {deleteRender} onCheckChangedRender ={onCheckChangedRender} />) : null
            }
            </div>}
          </div>
        </li>
    );
  }
}

export default TodoItem;
