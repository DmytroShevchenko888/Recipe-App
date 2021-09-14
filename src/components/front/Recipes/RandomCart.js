import {ButtonGroup,Col,Button,Card,Row} from "react-bootstrap"
import "./Card-style.css";
const RandomCart = ({items,recipesApi,addToFavorite}) => {
  return (
    <Row>
        
    {items.map(item => (
      <Col className="container-fluid d-flex justify-content-center">
             <Card className="card text-center shadow">
        <div key={item.idMeal}>
          <div className="overflow">
              <Card.Img src={item.strMealThumb} alt="foods" className="card-img-top"/>
          </div>
              <Card.Body className="card-body text-dark">
                  <Card.Title className="card-title">{item.strMeal}</Card.Title>
                  <Card.Text className="card-text text-secondary">{item.strInstructions}</Card.Text>
            
              <ButtonGroup>
                  <Button variant="outline-success" onClick={() => addToFavorite(item)}>Like</Button>
                  <Button variant="outline-primary" onClick={recipesApi}>Skip</Button>
              </ButtonGroup>
              </Card.Body>
        </div>
        </Card>
              </Col>
      ))}
  
  </Row>
  )
}

export default RandomCart