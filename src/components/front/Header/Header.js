import {Nav,Navbar,Container,Button} from "react-bootstrap"
import {Link} from "react-router-dom";
const Header = ({handleShow}) => {
    return (
        
<Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto ">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/favorite">Favorite</Nav.Link>
      </Nav>
      <Nav className="/favorite ml-auto">
          <Link to="/favorite">
          <Button className = "btn" onClick={handleShow}>+ Add New Recipe</Button>
          </Link>
      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    )
}

export default Header
