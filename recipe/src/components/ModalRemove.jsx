import React, { Component } from "react";
import "./Modal.css";

class ModalRemove extends Component {
  state = {};

  removeTitle = () => {
    this.props.removeTitle(this.props.title);
    this.props.handleClose();
  };

  render() { 
    const { handleClose, show } = this.props;
    return (
      <div className={show ? "modal display-block" : "modal display-none"}>
        <section className="modal-main">
          <p>
            <b>REMOVE {this.props.title}? </b>{" "}
          </p>
          <hr />
          <button className="btn btn-secondary m-2" type="button" onClick={this.removeTitle}>
            REMOVE
          </button>
          <button className="btn btn-danger" onClick={handleClose}>
            CLOSE
          </button>
        </section>
      </div>
    );
  }
}

export default ModalRemove;

/* https://github.com/intljusticemission/react-big-calendar/issues/397

https://stackoverflow.com/questions/34587067/change-color-of-react-big-calendar-events

*/
