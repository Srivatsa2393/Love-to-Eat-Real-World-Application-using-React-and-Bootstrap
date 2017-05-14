import React, { Component } from 'react';

class Submit extends React.Component{

  constructor(props){
    super(props);

    this.satte={};

    this.submitRecipe = this.submitRecipe.bind(this);
  }

  submitRecipe(){
    console.log('button clicked');
    this.props.history.push('/');
  }

  render(){
    return(
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <h1>Submit</h1>
              <form>
                <div class="form-group">
                  <label for="name">Email address</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter the name of the recipe" />
                </div>
                <div className="form-group">
                  <label for="description">Description</label>
                  <textarea className="form-control" id="description" placeholder="Enter a brief description" />
                </div>
                <div className="form-inline form-group">
                  <label for="quantity">Quantity</label>
                  <input type="text" className="form-control" id="quantity" placeholder="Quantity" />

                  <label for="ingredient">Ingredients</label>
                  <input type="text" className="form-control" id="ingredient" placeholder="Ingredients" />
                  <button type="submit" className="btn btn-info">Add</button>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
          </div>
        </div>
        <button onClick={this.submitRecipe}>Submit a Recipe</button>
      </div>
    );
  }
}

export default Submit;
