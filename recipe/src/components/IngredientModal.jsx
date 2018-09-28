//I don't need this component

import React, { Component } from "react";

class IngredientModal extends Component {
  state = {
    /* ingredients: this.props.recipe.ingredients,
    isChecked: false */
    showModal: false
  };

  renderModal= () =>{
    return( 
      <div className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
           {/*  {this.state.ingredients.map((ingredient, i) => {
              <div>
                <input type="checkbox"
                value={ingredient} defaultChecked={this.state.isChecked} onChange={this.handleChange} />
                <li key={i}>{ingredient}</li>
              </div>;
            })} */}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary" /* onClick={this.handleClick} */>
              Add Ingredients
            </button>
          </div>
        </div>
      </div>
    </div>
    );
  }

  // handleChange = () => {
  //   //this.setState({isChecked: !isChecked});
  //   this.handleChecked();
  // }

  // handleChecked = () =>{
  //   const checked = this.state.filter(item => item.isChecked !== false);
  //   this.setState({ingredients: checked});
  //   console.log(this.state.ingredients);
  // };

  // handleClick = () => {
  //   /* this.addTodo(this.state.ingredients); */
  // };

  render() {
    return (
      <div>
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.setState({showModal: true})}
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Launch demo modal
        </button>

        {this.state.showModal && this.renderModal()}

        
      </div>
    );
  }
}

export default IngredientModal;
