import React, { Component } from 'react';
import Ingredients from './Ingredients';

class Submit extends React.Component{

  constructor(props){
    super(props);

    this.state={};

    this.submitRecipe = this.submitRecipe.bind(this);
  }

  submitRecipe(){
    console.log('button clicked');
    this.props.history.push('/');
    console.log(this.name.value);
    console.log(this.description.value);
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
                <Ingredients />
                
                <button type="button" className="btn btn-default" onClick={this.submitRecipe}>Submit a Recipe</button>
              </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Submit;
