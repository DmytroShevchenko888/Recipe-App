import axios from "axios";
import "../Recipes/Card-style.css"
import React, { useState,useEffect } from "react";
import Favorite from "./../Recipes/Favorite";
import RandomCart from "../Recipes/RandomCart";
import AddDishLogic from "../Recipes/AddDishLogic";
import { Route, Switch } from "react-router-dom";

const Routes = ({show, handleClose,handleShow}) => {

    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    
  
   const recipesApi =  () => {
     axios
        .get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res => {
          setItems(res.data.meals);
        })
        .then(
        
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
        }
  
  
        useEffect(() => {
          recipesApi();
          
    }, []);
  


    const [favorite, setFavorite] = useState([]);

        // to get the data from LS

    useEffect(() => {
      const dishFavorites = JSON.parse(
        localStorage.getItem('your-favorites')
      );
      
      if(dishFavorites) {
        setFavorite(dishFavorites);
      }
      
    }, []);
  
        //add data to localStorage
    const saveToLocalStorage = (favorite) => {
      localStorage.setItem('your-favorites', JSON.stringify(favorite))
    }
  
    const addToFavorite = (item) => {

      const Fav = favorite.find((favoriteItem) => favoriteItem.idMeal === item.idMeal);
      if(Fav){
        return(item.idMeal);
      }
      
      const newFavoriteList = ([...favorite, item]);
        setFavorite(newFavoriteList);
        saveToLocalStorage(newFavoriteList);//saved
     
    };
  
    const removedToFavorite = (item) => {
      const newFavoriteList = favorite.filter(
        (favoriteItem) => favoriteItem.idMeal !== item.idMeal
      );
      setFavorite(newFavoriteList);
      saveToLocalStorage(newFavoriteList);//removed
    };
  
    
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {


    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <div className="container-fluid d-flex justify-content-center">
                            <RandomCart
                            items={items}
                            recipesApi={recipesApi}
                            addToFavorite={addToFavorite}
                            /> 
                            </div>  
                </Route>
                    
                    
                     
                <Route path="/favorite" exact>
                    
                            <Favorite
                            favorite={favorite}
                            removedToFavorite={removedToFavorite}
                            />
                             <AddDishLogic
                             show={show}
                             handleClose={handleClose}
                             handleShow={handleShow}
                             />
                </Route>
            </Switch>
        </div>
    )
}
}
export default Routes
