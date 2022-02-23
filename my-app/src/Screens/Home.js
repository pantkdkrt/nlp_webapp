import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
//const baseURL = "http://127.0.0.1:5000";
const baseURLTask1 = "http://nlp1.the-scamper.superai.me:10100/word";

function Home() {
  const [TextInputWS, setTextInputWS] = useState();
  const [TextInputSS, setTextInputSS] = useState();
  const [TextInputNER, setTextInputNER] = useState();
  const [TextInputPOS, setTextInputPOS] = useState();
  const [post, setPost] = useState();



  function createPost() {
    axios
      .post(baseURLTask1, {
        title: TextInputWS,
       
      })
      .then((response) => {
      
        setPost(response.data);
      });
      console.log(post)
  }

  //if (!post) return null;

  return (
    <Container fluid>
      <Row style={{ backgroundColor: "#DABBFF" }}>
        <Col>
          <h1>APIs Demo</h1>
        </Col>
      </Row>
      <Row
        style={{ padding: "1rem", height: "18rem", backgroundColor: "#B7F0FF" }}
      >
        <h2>1. Word Segmentation</h2>
        <Col lg={6}>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Input</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => {
                  setTextInputWS(e.target.value);
                }}
              />
            </Form.Group>
            <Button onClick={createPost}>Go</Button>
          </Form>
          
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>Output</Card.Header>
            <Card.Body>
            {post && post.map((v,i) => (
                <span style={{margin: '1rem', padding: '0.5rem', backgroundColor: "#EEBFFF"}} key={i}>{v}</span>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row
        style={{ padding: "1rem", height: "18rem", backgroundColor: "#C2FFAC" }}
      >
        <h2>2. Sentence Segmentation</h2>
        <Col>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Input</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => {
                  setTextInputSS(e.target.value);
                }}
              />
            </Form.Group>
            <Button>Go</Button>
          </Form>
          <Container>{TextInputSS}</Container>
        </Col>
        <Col>
          <Card>
            <Card.Header>Output</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.{" "}
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row
        style={{ padding: "1rem", height: "18rem", backgroundColor: "#FFC3F3" }}
      >
        <h2>3. NER Tagging</h2>
        <Col>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Input</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => {
                  setTextInputNER(e.target.value);
                }}
              />
            </Form.Group>
            <Button>Go</Button>
          </Form>
          <Container>{TextInputNER}</Container>
        </Col>
        <Col>
          <Card>
            <Card.Header>Output</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.{" "}
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row
        style={{ padding: "1rem", height: "18rem", backgroundColor: "#FFD7C3" }}
      >
        <h2>4. POS Tagging</h2>
        <Col>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Input</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => {
                  setTextInputPOS(e.target.value);
                }}
              />
            </Form.Group>
            <Button>Go</Button>
          </Form>
          <Container>{TextInputPOS}</Container>
        </Col>
        <Col>
          <Card>
            <Card.Header>Output</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.{" "}
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
