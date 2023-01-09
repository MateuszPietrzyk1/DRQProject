import React from "react";
import axios from "axios";
import { Recipe } from "./Recipe";

export class EditRecipe extends React.Component {

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeRecipeName = this.onChangeRecipeTitle.bind(this);
        this.onChangeRecipeImage= this.onChangeRecipeTitle.bind(this);
        this.onChangeRecieDescription = this.onChangeRecipeDescription.bind(this);
        
        this.state = {
            Name:'',
            Image:'',
            Description:''
        }
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(`Button clicked 
        ${this.state.Name},
        ${this.state.Image},
        ${this.state.Description}`);

        const book ={
            title:this.state.Name,
            cover:this.state.Image,
            author:this.state.Description
        }

        axios.post('http://localhost:4000/api/recipes',Recipe)
        .then()
        .catch();

        this.setState({
            Name:'',
            Image:'',
            Description:''
        })
    }

    onChangeRecipeName(e){
        this.setState({
            title:e.target.value
        })
    }
    onChangeRecipeImage(e){
        this.setState({
            cover:e.target.value
        })
    }
    onChangeBookDesciption(e){
        this.setState({
            author:e.target.value
        })
    }

   
}