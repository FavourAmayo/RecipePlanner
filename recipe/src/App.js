import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import Form from "./components/Form";
import Recipes from "./components/Recipes";
import Navbar from "./components/Navbar";
//import { BrowserRouter } from "react-router-dom";

const API_KEY = "a6e0b6ef82be6a4ac03575816b3e9e39";

class App extends Component {
  state = {
    recipes: []
  };

  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=20`
    );

    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(data.recipes[0].recipe_id);

    //console.log("Working", recipeName);
  };

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes: recipes });
  };

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title" style={{ float: "left" }}>
            Recipe Planner
          </h1>
          <Navbar />
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;

/* Using APIs in React - Create a Recipe Application using React Router | React tutorial for beginners  by Hamza Mirza

https://www.youtube.com/watch?v=PbJt7-a2274
*/

/* React JS Tutorials for Beginners - 8 - Adding State to Components by thenewboston

https://www.youtube.com/watch?v=g6a5yC_v70c&list=PL6gx4Cwl9DGBuKtLgPR_zWYnrwv-JllpA&index=8
*/

/*React Tutorial: Create a Simple Todo List Web App with React by Brice Ayres 

https://www.youtube.com/watch?v=XCCW2y4wXNg
*/

/* ReactJS Basics by Academind

https://www.youtube.com/watch?v=JPT3bFIwJYA&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS */

/* How to edit the state of an object in an array OR
how to set the state of an object in an array in reactjs
->

https://stackoverflow.com/questions/35174489/reactjs-setstate-of-object-key-in-array
*/

/* How to toggle CSS Class with Reactjs by vodle ga

https://www.youtube.com/watch?v=7lLefi1cUz0
*/

/* Learn React - React Crash Course 2018 - React Tutorial with Examples by Programming with Mosh

https://www.youtube.com/watch?v=Ke90Tje7VS0

*/

/* React.js editable text field 
https://codepen.io/saoirsezee/pen/yOrVra
*/

/* React to do list
https://codepen.io/marekdano/pen/bVNYpq
*/

/* Simple to do list with React js and Bootstrap by Phil Mayfield
https://codepen.io/philmayfield/pen/MwRgyN?editors=0010
*/
