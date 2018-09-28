import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class CalendarButton extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavLink to="/Calendar">
          <button className="active-recipe__button recipe list">
            ADD RECIPE
          </button>{" "}
        </NavLink>
      </div>
    );
  }
}

export default CalendarButton;
