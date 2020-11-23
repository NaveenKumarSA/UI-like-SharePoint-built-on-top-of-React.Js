import logo from "./logo.svg";
import "./App.css";
import { Button, Card, Navbar, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import CarouselComponent from "./components/CarouselComponent";
import MainpageComponent from "./components/MainpageComponent";
import FooterComponent from "./components/FooterComponent";
import SubMainComponent from "./components/SubMainComponent";

function App() {
  return (
    <div className="App">
      <div className="navbarComponent">
        <NavbarComponent />
      </div>
      <Row>
        <Col className="carouselComponent">
          <CarouselComponent />
         
        </Col>
        <div className="carouselComponent">
        
          <SubMainComponent />
        </div>
      </Row>
      <div>
        <MainpageComponent />
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
