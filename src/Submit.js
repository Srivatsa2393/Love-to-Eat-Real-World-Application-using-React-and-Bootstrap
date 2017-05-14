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
        <h1>Submit</h1>
        <button onClick={this.submitRecipe}>Submit a Recipe</button>
      </div>
    );
  }
}

export default Submit;
