import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container, Row, Col, Image, Card } from "react-bootstrap";

export class MainpageComponent extends Component {
  render() {
    return (
      <div>
        
          <Jumbotron>
            <Row>
              <Col sm={3}>
                <Card>
                  <img src="https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                  <Card.Footer>Discussion Board</Card.Footer>
                </Card>
              </Col>
              <Col sm={3}>
                <Card>
                  <img src="https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                  <Card.Footer>Discussion Board</Card.Footer>
                </Card>
              </Col>
              <Col sm={3}>
                <Card>
                  <img src="https://images.unsplash.com/flagged/photo-1553267252-d100936057c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                  <Card.Footer>Events</Card.Footer>
                </Card>
              </Col>
              <Col sm={3}>
                <Card>
                  <img src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                  <Card.Footer>Events</Card.Footer>
                </Card>
              </Col>
            </Row>
          </Jumbotron>
      
      </div>
    );
  }
}

export default MainpageComponent;
