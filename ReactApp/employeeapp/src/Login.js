import React, { Component } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import Login_icon from "./Login_icon.png";
import Login_image from "./Login_image.png";
import "./Login.css";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    if (
      event.target.formBasicEmail.value === "admin" &&
      event.target.formBasicPassword.value === "admin123"
    ) {
      this.props.history.push("/home");
    } else {
      alert("Invalid Credentials..Please retry..!");
    }
  };

  render() {
    return (
      <>
        <Container className="mt-4">
          <Row>
            <Col lg={3} md={6} sm={12} className="text-center">
              <img
                className="icon-img mr-4"
                src={Login_icon}
                alt="icon"
              />
              <Form onSubmit={this.onSubmitHandler}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    className="w-85 my-3 h-25"
                    type="text"
                    placeholder="Enter username"
                    autoComplete="off"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    className="w-85  my-3 h-25"
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="">
                  Login
                </Button>
              </Form>
            </Col>
            <Col lg={9} md={6} sm={12}>
              <h1 className="ml-5 heading">Employee Management System</h1>
              <img
                className="login_image"
                src={Login_image}
                alt="sorry, img not load"
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
