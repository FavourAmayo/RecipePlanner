import React, { Component } from "react";
import "./ToDoInput.css";

class ToDoInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.todoText };

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  } 

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
 
  addTodo(todo){
    // Ensure a todo was actually entered before submitting
    if (todo.length > 0) {
      this.props.addTodo(todo); 
      this.setState({ value: "" });
    }
  }

  render() {
    return (
      <div className="inputButton">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          
        />
        <button
          className="btn btn-danger"
          onClick={() => this.addTodo(this.state.value)}
        >
          SUBMIT
        </button>
      </div>
    );
  }
}

export default ToDoInput;
