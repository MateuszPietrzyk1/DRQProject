import React from "react";
import {BookItem} from './bookItem';

export class Recipe extends React.Component{
    render(){
        return this.props.books.map(
            (recipe)=>{
                return <BookItem recipe={recipe} key={recipe._id} Reload={this.props.Reload}></BookItem>
            }
        );
    }
}