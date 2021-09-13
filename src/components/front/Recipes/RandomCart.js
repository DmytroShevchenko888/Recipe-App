import {ButtonGroup} from "react-bootstrap"
import "./Card-style.css";
const RandomCart = ({items,recipesApi,addToFavorite}) => {
  return (
    <div className="card text-center">
        
    {items.map(item => (

        <div key={item.idMeal}>
          <div className="overflow">
              <img src={item.strMealThumb} alt="foods" className="card-img-top"/>
          </div>
              <div className="card-body text-dark">
              <h4 className="card-title">{item.strMeal}</h4>
              <p className="card-text text-secondary">{item.strInstructions}</p>
          </div>
            <div>
              <ButtonGroup>
                <button className="btn btn-outline-success" onClick={() => addToFavorite(item)}>Like</button>
                <button className="btn btn-outline-primary" onClick={recipesApi}>Skip</button>
              </ButtonGroup>
            </div> 
        </div>
      ))}
  
  </div>
  )
}

export default RandomCart
