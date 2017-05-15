import React, { Component } from 'react';
import IngredientList from './IngredientList';

class Home extends React.Component{
  constructor(props){
    super(props);

    this.state={
      receipes: JSON.parse(localStorage.getItem('receipes')) || []
    };
  }

  displayReceipes(){
    let resultsArray = [];
    this.state.receipes.map((receipe,i) => {
      resultsArray.push(
        <div className="col-sm-4">
          {receipe.name} <br/>
          {receipe.description} <br/>
        <IngredientList receipe={receipe}/>
        </div>
      );
    });
    return resultsArray;
  }

  render(){
    return(
      <div className="row">
        {this.displayReceipes()}
      </div>
    );
  }
}

export default Home;
