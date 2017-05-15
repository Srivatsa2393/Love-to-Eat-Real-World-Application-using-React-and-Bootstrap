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
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src={receipe.image} alt={receipe.name}/>
              <div className="caption">
                <h3>{receipe.name}</h3>
                <p>{receipe.description}</p>
                <IngredientList receipe={receipe}/>
              </div>
          </div>
        </div>
      );
    });
    return resultsArray;
  }


  render(){
    return(
      <div className="row" onClick={this.removeReceipes}>
        {this.displayReceipes()}
      </div>
    );
  }
}

export default Home;
