import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import  Button  from "react-bootstrap/Button";
import axios from "axios";
export class BookItem extends React.Component {


    constructor(){
        super();
        this.DeleteRecipe = this.DeleteRecipe.bind(this);
    }

    DeleteRecipe(e){
        e.preventDefault();


        axios.delete('http://localhost:4000/api/recipe/'+this.props.recipe._id)
        .then((res)=>{this.props.Reload();})
        .catch();
    }
    
    render() {
        return (
            <div>
                {/* <h4>{this.props.book.title}</h4>
        <img src={this.props.book.thumbnailUrl}></img>
                <h6>{this.props.book.authors[0]}</h6> */}

                <Card>
                    <Card.Header>{this.props.recipe.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.recipe.Image}></img>
                            <footer >
                                {this.props.recipe.Description}
                            </footer>
                        </blockquote>
                    </Card.Body>
                <Link to={'/Recipes/'+this.props.recipe._id} className="btn btn-primary">Edit</Link>
                <Button variant="danger" onClick={this.DeleteRecipe}>Delete</Button>
                </Card>
            </div>
        );
    }
}