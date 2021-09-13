import React, {useState,useEffect} from "react";
//import Modal from "../../../Modal";
import { Modal,Button,Card, Col,Row,Container } from "react-bootstrap";
import "./Card-style.css"
import Form from 'react-bootstrap/Form';
import Placeholder from "../../../Placeholder.png"



function AddDishLogic({show, handleClose,handleShow}) {


const [addRecipe,setnewRecipe] = useState({
    strMeal:"",
    strInstructions:""
});

// to get the data from LS
/*
const getLocalItmes = () => {
  let list = localStorage.getItem('your-favorites');
  console.log(list);

  if (list) {
      return JSON.parse(localStorage.getItem('your-favorites'));
  } else {
      return [];
  }
}
*/
useEffect(() => {
  const dishFavorites = JSON.parse(
    localStorage.getItem('list')
  );
  
  if(dishFavorites) {
    setRecipe(dishFavorites);
  }
  
}, []);
///////////////////////////////////////////////////////////////////////////////////////getLocalItmes()
const [recipe, setRecipe] = useState([]);

const handleInputs = (e) => {
const name=e.target.name
const value=e.target.value
setnewRecipe({...addRecipe,[name] : value})
}

const handleSubmit = (e) => {

e.preventDefault();



if(!addRecipe.strMeal || !addRecipe.strInstructions){
  
  alert("Please, complete all fields !")

}else{

  const newRecipe = {...addRecipe, idMeal:new Date().getTime().toString()}
  //setRecipe([...recipe, newRecipe]);
  const addFavoriteList = ([...recipe, newRecipe])
  setRecipe(addFavoriteList);
  saveToLocalStorage(addFavoriteList);//saved


  setnewRecipe({        //clear felds
    strMeal:"",
    strInstructions:""})

} }

const removeTask = (item) => {
    //setRecipe([...recipe.filter((item) => item.id !== id)]);
    const addFavoriteList = recipe.filter((removeItem) => removeItem.idMeal !== item.idMeal);
    setRecipe(addFavoriteList);
    saveToLocalStorage(addFavoriteList);//removed
}

//add data to localStorage
const saveToLocalStorage = (recipe) => {
  localStorage.setItem('list', JSON.stringify(recipe))
}
/*
useEffect(() => {
  localStorage.setItem('your-favorites', JSON.stringify(recipe))
}, [recipe]);
*/

return (
  <div className="app">
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header>
      <Modal.Title>Add new recipe</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
      <Modal.Body>

      <Container>
      <Form>
        <Form.Group controlId="form.Name">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" 
            placeholder="Title..." 
            name="strMeal"
            value={addRecipe.strMeal}
            onChange={handleInputs}
            />
        </Form.Group>
        <Form.Group controlId="form.Textarea">
            <Form.Label>Recipe</Form.Label>
            <Form.Control as="textarea" rows={3} 
            name="strInstructions"
            value={addRecipe.strInstructions}
            onChange={handleInputs}
            />
        </Form.Group>
      </Form>
    </Container>

        </Modal.Body>

        <Modal.Footer>

          <Button type="submit"onClick={handleClose} >Add</Button>
          
        </Modal.Footer>
        </form>
      </Modal>

      <Row xs={1} md={3} className="g-4">
      {recipe.map((item)=>(
          <Col className="container-fluid d-flex justify-content-center">
          <Card className="card text-center shadow">
          <div key={item.idMeal}>
          <div className="overflow">
          <Card.Img img src={Placeholder} alt="Placeholder" className="card-img-top"/>
          </div>

          <Card.Body className="card-body text-dark">
          <Card.Title className="card-title">{item.strMeal}</Card.Title>
          <Card.Text className="card-text text-secondary">{item.strInstructions}</Card.Text>
          <Button variant="outline-danger" onClick={() => removeTask(item)}>Delete</Button>
          </Card.Body>
            </div>
            </Card>
              </Col>
        
      ))}
      </Row>

      </div>
);
        }
export default AddDishLogic;