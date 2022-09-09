import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getCocktailDetails } from "../utils/api";


const Cocktail = () => {
  const { id } = useParams()
  console.log(id);
  const [data , setData] = useState([])
  
  useEffect(() => {
     getCocktailDetails(id).then(data => setData([...data.drinks]) ).catch(err =>console.log(err) )
  } , [])
  console.log(data)
    return (
      <>
        (
         
        {data && data.map((value) => {
              
          return (
            <div className="container mt-4" key={id}>
              <Link to="/" className="btn btn-info">
                GO BACK
              </Link>
              <div className="row mt-4">
                <div className="col-md-5">
                  <img src={value.strDrinkThumb} alt={value.strDrink} height={300} width={400} />
                </div>
                <div className="col-md-5">
                  <h2>Name : {value.strDrink}</h2>
                  <p className="mt-1">Category : {value.strCategory}</p>
                  <p>Info : {value.strInstructions}</p>
                  <p>Glass : {value.strGlass}</p>
                  
                </div>
              </div>
            </div> 
          )
            })  
          }
        )
      </>
    );
  }


export default Cocktail;
