import Header from "./components/front/Header/Header";
import Routes from "./components/front/Routes/Routes";
import React, {useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";


const App = () => {
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div>
      <Router>
        <Header
        handleShow={handleShow}
        />
          <Routes 
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
          />
      </Router>
    </div>
  );
}

export default App;
