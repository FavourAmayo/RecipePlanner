import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const navStyle = {
  float: "right",
  listStyle: "none",
  display: "inline-flex",
  margin: "10px"
};

const listStyle = {
  margin: "15px",
  textDecoration: "none"
};

class Navbar extends Component {
  state = {}; 

  render() {
    return (
      <div style={navStyle}>
        {/* <NavLink to="/Home" style={listStyle}>
          Home
        </NavLink> */}
        <NavLink to="/" style={listStyle}>
          Search
        </NavLink>
        <NavLink to="/GroceryList" style={listStyle}>
          Grocery List
        </NavLink>
        <NavLink to="/Calendar" style={listStyle}>
          Calendar
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
