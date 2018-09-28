import React, { Component } from "react";
import Navbar from "./Navbar";

class Home extends Component {
  state = {};
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title" style={{ float: "left" }}>
              Recipe Search
            </h1>
            <Navbar />
          
          </header>
        </div>
    );
  }
}

export default Home;
