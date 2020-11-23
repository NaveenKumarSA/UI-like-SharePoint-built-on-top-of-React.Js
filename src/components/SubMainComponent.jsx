import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import "../App.css";
export class SubMainComponent extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="col-6">
              <Row>
                <h3 className="text-left">Quick Links</h3>
              </Row>
              <Col style={{ color: "whitesmoke" }}>
                <Row>
                  <div
                    className="border border-dark link-box"
                    style={{
                      backgroundColor: "lightseagreen",
                      padding: "2px",
                      paddingTop: "50px",
                      paddingBottom: "30px",
                      margin: "5px",
                    }}
                  >
                    <h5>Time Sheets</h5>
                  </div>

                  <div
                    className="border border-dark link-box"
                    style={{
                      backgroundColor: "lightseagreen",
                      padding: "2px",
                      paddingTop: "50px",
                      paddingBottom: "30px",
                      margin: "5px",
                    }}
                  >
                    <h5>Leave</h5>
                  </div>
                </Row>
                <Row>
                  <div
                    className="border border-dark link-box"
                    style={{
                      backgroundColor: "lightseagreen",
                      padding: "2px",
                      paddingTop: "50px",
                      paddingBottom: "30px",
                      margin: "5px",
                    }}
                  >
                    <h5>Expenses</h5>
                  </div>
                </Row>
              </Col>
            </Col>
            <Col className="col-6">
              <Col>
                <h3 className="text-left">Documents</h3>
              </Col>
              <Col>
                <Row>
                  <Button className="documentsButton bg-white text-black-50 border border-dark">
                    + new{" "}
                  </Button>
                  <Button className="documentsButton bg-white text-black-50 border border-dark">
                    Documents{" "}
                  </Button>
                </Row>
              </Col>
              <Col style={{ marginTop: "5px" }}>
                <ListGroup className="border border-dark" as="ul">
                  <ListGroup.Item as="li" active>
                    Cras justo odio
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    Dapibus ac facilisis in
                  </ListGroup.Item>
                  <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item as="li">
                    Porta ac consectetur ac
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SubMainComponent;
