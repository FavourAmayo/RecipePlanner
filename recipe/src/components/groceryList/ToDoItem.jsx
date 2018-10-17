import React, { Component } from "react";
import "./ToDoItem.css";

const divStyle = {
  backgroundColor: "#a9f0c9",
  marginRight: '100px'
};

class ToDoItem extends Component {
  /* constructor(props) {
    super(props);
  } */

  state = {
    isEdit: false, 
    classGreen: false
  };

  removeTodo = id => {
    this.props.removeTodo(id);
  };

  onEdit = () => {
    this.setState({ isEdit: true });
  }; 

  onSave = () => {
    this.setState({ isEdit: false });
    let val = this.refs.newText.value;
    this.props.updateItemText(
      val, 
      this.props.id
    ); /* Maybe this second parameter is not correct "this.props.todo.id" */
  };

  toggleColor = () => {
      this.setState({classGreen: !this.state.classGreen});
  };   
 
  renderNormal = () => {
    return (
      <div className="todoWrapper" style={this.state.classGreen ?divStyle : null}>
        
        
        <button onClick={this.toggleColor} className="btn btn-secondary m-2" type="button">
          {" "}
          &#10003;
        </button>
        {this.props.todo.text}
        <span className="edit remove">
        <button className="btn btn-secondary m-2 edit" type="button" onClick={this.onEdit}>
          EDIT
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={e => this.removeTodo(this.props.id)}
        >
          REMOVE
        </button>
        </span>
        
        {/* <input type="checkbox" onChange={this.toggleColor} style={{margin: '0', padding: '0'}}/> */}
      </div>
    );
  };

  renderForm = () => {
    return (
      <div className="todoWrapper">
        <textarea
          ref="newText"
          defaultValue={this.props.todo.text}
          name=""
          id=""
          cols="30"
          rows="1"
        />
        <button onClick={this.onSave} className="btn btn-secondary m-2 save">
          SAVE
        </button>
      </div>
    );
  };

  render() {
    /* return (
      <div className="todoWrapper">
        <button
          className="removeTodo"
          onClick={e => this.removeTodo(this.props.id)}
        >
          remove
        </button>
        <button className="editTodo" type="button" onClick={this.onEdit}>Edit</button>
        {this.props.todo.text}
        
      </div> 
    );*/

    if (this.state.isEdit) {
      return this.renderForm();
    } else {
      return this.renderNormal();
    }
  }
}

export default ToDoItem;
