import React, { Component } from 'react';
import Ingredients from './Ingredients';
import IngredientList from './IngredientList';

class Submit extends React.Component{

  constructor(props){
    super(props);

    this.state={
      newReceipe: {
        name: "New Receipe",
        description: "Description",
        ingredients: []
      }
    };

    this.submitRecipe = this.submitRecipe.bind(this);
  }

  submitRecipe(){
    console.log('button clicked');
    this.props.history.push('/');
    console.log(this.name.value);
    console.log(this.description.value);
    let newReceipe = this.state.newReceipe;

    newReceipe.name = this.name.value;
    newReceipe.description = this.description.value;

    this.setState({newReceipe});
    console.log(newReceipe);
  }

  addIngredient(quantity, ingredient){
    console.log("Add Ingredients in submit", quantity, ingredient);
    //get the new Receipe
    let newReceipe = this.state.newReceipe;
    newReceipe.ingredients.push({quantity: quantity, ingredient: ingredient});
    this.setState({newReceipe: newReceipe});
    console.log(newReceipe);
  }

  render(){
    return(
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <h1>Submit</h1>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Email address</label>
                  <input type="text"
                    ref={(input) => {this.name = input;}}
                    className="form-control"
                    id="name"
                    placeholder="Enter the name of the recipe" />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    ref={(input) => {this.description = input;}}
                    placeholder="Enter a brief description" />
                </div>
                <IngredientList receipe={this.state.newReceipe}/>
                <Ingredients addIngredient={(quantity, ingredient) => {this.addIngredient(quantity, ingredient)}} />

                <button type="button" className="btn btn-default" onClick={this.submitRecipe}>Submit a Recipe</button>
              </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Submit;
