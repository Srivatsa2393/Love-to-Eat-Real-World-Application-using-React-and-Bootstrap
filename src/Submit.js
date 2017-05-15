import React, { Component } from 'react';
import Ingredients from './Ingredients';
import IngredientList from './IngredientList';
import createBrowserHistory from 'history/createBrowserHistory';
import Dropzone from 'react-dropzone';
import request from 'superagent';

// import statements

const CLOUDINARY_UPLOAD_PRESET = 'snasajez';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/srivatsa2393/upload';


class Submit extends React.Component{

  constructor(props){
    super(props);

    this.state={
      receipes: JSON.parse(localStorage.getItem('receipes')) || [],
      newReceipe: {
        name: "New Receipe",
        description: "Description",
        ingredients: []
      },
      uploadedFileCloudinaryUrl: ''
    };

    this.submitRecipe = this.submitRecipe.bind(this);
    this.onImageDrop = this.onImageDrop.bind(this);
  }

  onImageDrop(files){
    this.setState({
    uploadedFile: files[0]
  });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  submitRecipe(){
    console.log('button clicked');
    this.props.history.push('/');
    console.log(this.name.value);
    console.log(this.description.value);
    let newReceipe = this.state.newReceipe;

    newReceipe.name = this.name.value;
    newReceipe.description = this.description.value;
    newReceipe.image = this.state.uploadedFileCloudinaryUrl;

    this.setState({newReceipe});

    let receipes = this.state.receipes;
    receipes.push(newReceipe);

    this.setState({receipes});
    //local storage
    localStorage.setItem('receipes',JSON.stringify(receipes));
    createBrowserHistory.push('/');

    //console.log(newReceipe);
    console.log(receipes);
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
                <Dropzone
                  multiple={false}
                  accept="image/*"
                  onDrop={this.onImageDrop}>
                  <p>Drop an image or click to select a file to upload.</p>
                </Dropzone>
                <div>
                 {this.state.uploadedFileCloudinaryUrl === '' ? null :
                 <div>
                   <p>{this.state.uploadedFile.name}</p>
                   <img alt={this.state.uploadedFile.name} src={this.state.uploadedFileCloudinaryUrl} />
                 </div>}
                </div>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
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
