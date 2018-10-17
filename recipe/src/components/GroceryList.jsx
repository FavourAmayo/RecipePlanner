import React, { Component } from "react";
import Navbar from "./Navbar";
import ToDoItem from "./groceryList/ToDoItem";
import ToDoInput from "./groceryList/ToDoInput";


class GroceryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 0, text: "Rice" },
        { id: 1, text: "Milk" },
        { id: 2, text: "Tomato sauce" }
      ],
      nextId: 3 
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateText = this.updateText.bind(this);

  }

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({ id: this.state.nextId, text: todoText });
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id), /* nextId: --this.state.nextId */ 
    });
    //this.ResetIds();
  };

  /* ResetIds=()=>{
    let todos = this.state.todos.slice();
    for (let i = 0; i < todos.length; i++) {
      todos[i].id = i;
    }
    console.log(todos);
    this.setState({todos: todos, nextId: todos.length-1.id + 1});
  }; */

  updateText(newText, index) {
    let arr = this.state.todos;
    console.log(arr);
    let item = this.state.todos.findIndex(todo => todo.id === index);
    console.log(item);
    arr[item].text = newText;
    this.setState({ todos: arr });
  };

  componentDidMount = () => {
    const json2 = localStorage.getItem("list");
    const list = JSON.parse(json2);
    this.setState({ todos: list });

    const json3 = localStorage.getItem("id");
    const id = JSON.parse(json3);
    this.setState({nextId: id});
  };

  componentDidUpdate = (prevProps, prevState) => {
    const list = JSON.stringify(this.state.todos);
    localStorage.setItem("list", list);

    const id = JSON.stringify(this.state.nextId);
    localStorage.setItem("id", id);
  };

  

  /* componentDidMount = () => {
    //Add ToDo's
    var add_todo_btn = document.getElementById('add-btn');
    var todo_input = document.getElementById('todo-input');
    var list = document.getElementById('list');
    add_todo_btn.addEventListener('click', function(){
      var todo = todo_input.value;

      var item = document.createElement('DIV');
      item.classList.add('item');

      var item_text = document.createElement('DIV');
      item_text.classList.add('item-text');
      item_text.textContent = todo;

      var edit_input = document.createElement('INPUT');
      edit_input.classList.add('edit-input');
      edit_input.classList.add('hide');
      edit_input.name = 'edit-input';
      edit_input.type = 'text';
      edit_input.value = todo;

      var edit_input_btn = document.createElement('BUTTON');
      edit_input_btn.textContent = 'UPDATE';
      edit_input_btn.classList.add('action-btn');
      edit_input_btn.classList.add('update-btn');
      edit_input_btn.classList.add('hide');
      edit_input_btn.type = 'button';

      var action_btns = document.createElement('DIV');
      action_btns.classList.add('action-btns');

      var edit_btn = document.createElement('BUTTON');

      
    });

    //Edit ToDo's
    edit_btn.addEventListener('click', function(){
      edit_input.classList.remove('hide');
      item_text.classList.add('hide');
      edit_input_btn.classList.remove('hide');
      edit_input_btn.addEventListener('click', function(){
        item_text.textContent = edit_input.value;
        edit_iniput.classList.add('hide');
        item_text.classList.remove('hide');
        edit_input_btn.classList.add('hide');
      });
    });

    var remove_btn = document.createElement('BUTTON');
    remove_btn.classList.add('action-btn');
    remove_btn.classList.add('remove-btn');
    remove_btn.textContent = 'REMOVE';


    //Remove ToDo's
    remove_btn.addEventListener('click', function(){
      item.parentNode..removeChild(item);
    });

    action_btns.append(edit_input_btn);
    action_btns.append(edit_btn);
    action_btns.append(remove_btn);
    item.append(item_text);
    item.append(edit_input);
    item.append(action_btns);
    list.append(item);

    todo_input.value = '';
  }; */

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title" style={{ float: "left" }}>
            Recipe Planner
          </h1>
          <Navbar />
        </header> 

        {/* <div className="app">
          <div className="header" />
          <div className="title">Grocery List</div>
          <div className="input">
            <input
              type="text"
              name="todo-input"
              id="todo-input"
              class="input-element"
              placeholder="Add An Item"
            />
            <button
              type="button"
              name="add-btn"
              id=" add-btn"
              className="input-btn"
            >
              ADD
            </button>
          </div> 
          <div className="todo-list" id="list" />
        </div> */}

        <div className="todo-wrapper">
          <ToDoInput todoText="" addTodo={this.addTodo} />
          <ul>
            {this.state.todos.map(todo => {
              return (
                <ToDoItem
                  todo={todo}
                  key={todo.id}
                  id={todo.id}
                  removeTodo={this.removeTodo}
                  handleEdit={this.handleEdit}
                  updateItemText={this.updateText}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default GroceryList;


/* Update one item in an array ->

https://stackoverflow.com/questions/41018605/update-single-value-in-item-array-react-redux
*/