import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useEffect } from "react";
import { useState } from "react";
import {API} from "./App.js"

export function Recipedetails() {
  const { id } = useParams();
  const [recipelist, setrecipelist] = useState({});
 
 

  useEffect(()=>{fetch(`${API}/${id}`,{
    method:"GET"}) //Promise
    .then((data)=>data.json())// Response
    .then((list)=>setrecipelist(list));},[id])

  const his=useHistory();
  return (

    <div className="recipe-new">
      <iframe width="1000" height="536" src={recipelist.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <div className="recipe-detailed-container">
        <h1 className="foodname">{recipelist.recipes_name} </h1>
   
      </div>
      <p className="recipe_ingredients"> <h4 >Ingredients:</h4>{recipelist.ingredients} </p> 
      <Button onClick={()=>his.goBack()} variant="contained" startIcon={<ArrowBackIosIcon />}>
  Back
</Button>
    </div>

  );
}
