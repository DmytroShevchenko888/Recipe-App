import {Card, Col,Row,Button} from "react-bootstrap"
import "./Card-style.css"

const Recipes = ({favorite,removedToFavorite}) => {

    

  
    return (
        <Row xs={1} md={3} className="g-4">
            
          {favorite.map((item) => (
           
             <Col className="container-fluid d-flex justify-content-center">
             <Card className="card text-center shadow">
              <div  key={item.idMeal}>
                    <div className="overflow">
                    <Card.Img src={item.strMealThumb} alt="foods" className="card-img-top"/>
                    </div>
                    <Card.Body className="card-body text-dark">
                    <Card.Title className="card-title">{item.strMeal}</Card.Title>
                    <Card.Text className="card-text text-secondary">{item.strInstructions}</Card.Text>
                    <Button variant="outline-danger" onClick={() => removedToFavorite(item)}>Delete</Button>
                    </Card.Body>
                
                    
          
               
              </div>
              </Card>
              </Col>
              
            
    ))}     
           </Row>  
    )
}

 export default Recipes 

