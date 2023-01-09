import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Edit(){
    let {id} = useParams();
    const [Name, setName] = useState('');
    const [Image, setImage] = useState('');
    const [Description, setDescription] = useState('');

    useEffect(()=>{
        axios.get('http://localhost:4000/api/recipe/'+id)
        .then((response)=>{
            setName(response.data.Name);
            setImage(response.data.Image);
            setDescription(response.data.Description);
        })
        .catch()
    },[]);

    const handleSubmit = (e)=>{
        e.preventDefault();

        const editRecipe = {
            Name:Name,
            Image:Image,
            Description:Description
        }

        axios.put('http://localhost:4000/api/recipe/'+id,editRecipe)
        .then()
        .catch();
    }

    return(
        <div>
            <h3>Edit component</h3>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                        <label>Edit Name: </label>
                        <input type="text"
                            className="form-control"
                            value={title}
                            onChange={(e)=>{setName(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Image: </label>
                        <input type="text"
                            className="form-control"
                            value={cover}
                            onChange={(e)=>{setImage(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Description: </label>
                        <input type="text"
                            className="form-control"
                            value={author}
                            onChange={(e)=>{setDescription(e.target.value)}}
                        />
                    </div>
                <input type="submit" value="Edit Recipe"></input>
            </form>
        </div>
    );
}