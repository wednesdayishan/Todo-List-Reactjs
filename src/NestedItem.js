import React , {Component} from 'react';
// import { Checkbox } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class NestedItem extends Component {
  state = {
    todos : '',
    todo : ''
  }
 
  onClickButton = () => {
    const {  nestedItem, todo, deleteRender } = this.props;
    let todos = this.props.todos
    // let todos1= todos;
    if(todo.nestedlistArray.length === 1){
      todos = todos.filter((item) => item !== todo);
    }else {
      todo.nestedlistArray = todo.nestedlistArray.filter((item) => item !== nestedItem);
    }
    
    this.setState({
      todo : todo,
      todos : todos
    })
    deleteRender(todos);
  }

  // deleteTodo = (todo, nestedItem) => {
  //   todos = todos.filter((item) => item !== nestedItem);
  //   return todos;

  // }
  onCheckChanged = (nestedItem) => {
    nestedItem.isComplete = !nestedItem.isComplete;
  }
  onChangeListener = () => {
    const { nestedItem, todos,  onCheckChangedRender} = this.props;

    onCheckChangedRender(this.onCheckChanged(nestedItem, todos));
  };

  render () {
    console.log("here");
    const {  nestedItem } = this.props;
    return (
      <div class = "nestedTodoListContainer">
        
          {/* <ul> */}
            <li class = "nestedTodoList">
            <input
              defaultValue={nestedItem.isChecked}
              onChange={this.onChangeListener}
              type="checkbox" class = 'nestedCheckbox'/>
            <span class = "nestedItemName">{nestedItem.item}</span>
            <FontAwesomeIcon icon={faTrashAlt} onClick={this.onClickButton} />
            </li>
          {/* </ul> */}
      </div>
    )
  }

}

export default NestedItem;