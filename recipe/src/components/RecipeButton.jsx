import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class RecipeButton extends Component {
  state = {};

  /*   handleIngredients = (ingredients) => {
    // Ensure a todo was actually entered before submitting

    //console.log("Ingredients from handleIngredients: ", this.state.items);

    const z = this.state.items;
    const food = this.state.food;

    for(var i = 0; i < z.length; i++){
        food.push({id: i, text: this.state.items[i]});
    }
    this.setState({food: food});

    console.log("Food: ", this.state.food);
    
    /* const todo = this.state.ingredients;

    if (todo.length > 0) {
      this.props.addIngredients(todo);
      this.setState({ ingredients: "" });
    }  */

  /* const ingr = [...this.state.ingredients];
    if (ingr.length > 0) {
      this.props.addIngredients(ingr);
      this.setState({ ingredients: "" });
    } */

  /* 
    if(ingredients.length > 0){
        this.props.addIngredients(ingredients);
        this.setState({cats: ""});
    }
  };
 */
  render() {
    return (
      <div>
        <NavLink to="/GroceryList">
          <button className="active-recipe__button ingredients">
            ADD INGREDIENTS
          </button>{" "}
        </NavLink>
      </div>
    );
  }
}

export default RecipeButton;
