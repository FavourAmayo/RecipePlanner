import React, { Component } from "react";
import "./Modal.css";


class Modal extends Component {
  state = {
    meal: ""
  };

  handleChange = e => {
    this.setState({ meal: e.target.value });
  };

  foodSubmit = () => {
    this.props.onSubmit(this.state.meal);
    this.setState({ meal: "" });
    this.props.handleClose();
  };
  render() {
    const { handleClose, show } = this.props;
    return (
      <div className={show ? "modal display-block" : "modal display-none"}>
        <section className="modal-main">
          <p><b>MEAL:</b> </p>
          <input type="text" value={this.state.meal} onChange={this.handleChange} />
          <hr />
          <button className="btn btn-secondary m-2" onClick={this.foodSubmit}>
            SUBMIT
          </button>
          <button className="btn btn-danger" onClick={handleClose}>CLOSE</button>
        </section>
      </div>
    );
  }
}

export default Modal;

/* Got code from 
  https://alligator.io/react/modal-component/

  https://medium.com/@willscripps/getting-a-calendar-to-work-in-react-e2d8269435ff

  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date


  For the delete method: 
  https://github.com/intljusticemission/react-big-calendar/issues/974
  */
