import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import RecipeButton from "./RecipeButton";
import CalendarButton from "./CalendarButton";

const API_KEY = "a6e0b6ef82be6a4ac03575816b3e9e39";

class Recipe extends Component {
  state = {
    activeRecipe: []
  }; 

  componentDidMount = async () => { 

    //Going to local storage to get the previously stored data
    const json4 = localStorage.getItem("cook");
    const cook = JSON.parse(json4);
    this.setState({ activeRecipe: cook });

    //Calling the api to get the data
    console.log(this.props);
    const title = this.props.location.state.recipe;
    const req = await fetch(
      `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/get?key=${API_KEY}&rId=${title}`
    );

    const res = await req.json();
    console.log("Data from api call: ", req);
    console.log("res: ", res);
    //console.log(this.state.activeRecipe);
    //this.setState({ activeRecipe: res.recipes[0] });
    this.setState({ activeRecipe: res.recipe });

    
  };

 /*   componentDidMount = () => {
    const json4 = localStorage.getItem("cook");
    const cook = JSON.parse(json4);
    this.setState({ activeRecipe: cook });
  };*/

  componentDidUpdate = () => {
    const cook = JSON.stringify(this.state.activeRecipe);
    localStorage.setItem("cook", cook);
  };  

  render() {
    const recipe = this.state.activeRecipe;
    /* console.log(recipe);
    console.log("Ingredients: ", recipe.ingredients); */
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title" style={{ float: "left" }}>
            Recipe Search
          </h1>
          <Navbar />
        </header>

        <div className="container">
          {this.state.activeRecipe.length !== 0 && (
            <div className="active-recipe">
              <img
                className="active-recipe__img"
                src={recipe.image_url}
                alt={recipe.title}
              />
              <h3 className="active-recipe__title">{recipe.title}</h3>
              <h4 className="active-recipe__publisher">
                Publisher: <span>{recipe.publisher}</span>
              </h4>
              <p className="active-recipe__website">
                Website:{" "}
                <span>
                  <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
                </span>
              </p>
              <p className="active-recipe__website">
                Ingredients:{" "}
                <span>
                  {recipe.ingredients.map((ingredient, i) => {
                    return <li key={i}>{ingredient}</li>;
                  })}
                </span>{" "}
              </p>
              {/* <button className="active-recipe__button ingredients" onClick={this.handleIngredients}>
                ADD INGREDIENTS
              </button>{" "} */}
              <RecipeButton />
              <br />
              {/* <button className="active-recipe__button recipe list">
                ADD RECIPE
              </button>{" "}
              <br /> */}
              <CalendarButton />
              <br />
              <button
                className="active-recipe__button"
                style={{ marginBottom: "20px" }}
              >
                <Link to="/">Go Home</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Recipe;

/* <div className="App">
        <header className="App-header">
          <h1 className="App-title" style={{ float: "left" }}>
            Recipe Search
          </h1>
          <Navbar />
        </header>

        <div className="container">
          {this.state.activeRecipe.length !== 0 && (
            <div className="active-recipe">
              <img
                className="active-recipe__img"
                src={recipe.image_url}
                alt={recipe.title}
              />
              <h3 className="active-recipe__title">{recipe.title}</h3>
              <h4 className="active-recipe__publisher">
                Publisher: <span>{recipe.publisher}</span>
              </h4>
              <p className="active-recipe__website">
                Website:{" "}
                <span>
                  <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
                </span>
              </p>
              <p className="active-recipe__website">
                Ingredients:{" "}
                <span>{recipe.ingredients.map((ingredient, i) => {
                  return(
                  <li key={i}>{ingredient}</li>);
                })}</span>{" "} 
              </p>
              <button className="active-recipe__button ingredients">ADD INGREDIENTS</button> <br />
              <br />
              <button className="active-recipe__button recipe">ADD RECIPE</button> <br />
              <br />
              <button className="active-recipe__button" style={{marginBottom: '20px'}}>
                <Link to="/">Go Home</Link>
              </button>
            </div>
          )}
        </div>
      </div> */
