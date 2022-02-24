import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
//const baseURL = "http://127.0.0.1:5000";
const baseURLTask1 = "http://nlp1.the-scamper.superai.me:10100/word";
const baseURLTask2 = "http://nlp1.the-scamper.superai.me:10200/pos";
const baseURLTask3 = "http://nlp1.the-scamper.superai.me:10300/ner";

function Home() {
  const [TextInputWS, setTextInputWS] = useState();
  const [TextInputSS, setTextInputSS] = useState();
  const [TextInputNER, setTextInputNER] = useState();
  const [TextInputPOS, setTextInputPOS] = useState();
  const [post, setPost] = useState();
  const [post2, setPost2] = useState();
  const [post3, setPost3] = useState();
  const [post4, setPost4] = useState();
  const [TxtFile, setTxtFile] = useState();
  const [TxtFile2, setTxtFile2] = useState();

  const showFile = (e) => {
    e.preventDefault();
    //setTxtFileName(e.target.files[0].name)
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      console.log(text);
      setTxtFile(text);
    };
    reader.readAsText(e.target.files[0]);
  };

  function splitArrayIntoChunksOfLen(arr, len) {
    var chunks = [],
      i = 0,
      n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, (i += len)));
    }
    return chunks;
  }

  const showFile2 = (e) => {
    e.preventDefault();
    //setTxtFileName(e.target.files[0].name)
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result.replace(/ /g, "");
      const text2 = text.split("\n"); //.replace(/(\r\n|\n|\r)/gm," ");
      const text3 = text2.toString();
      const text4 = text3.split(",");
      console.log(text2);

      const long = splitArrayIntoChunksOfLen(text4, 50);
      setTxtFile2(long);

      console.log(long);
    };
    reader.readAsText(e.target.files[0]);
  };

  function createPost() {
    axios
      .post(baseURLTask1, {
        title: TextInputWS,
      })
      .then((response) => {
        setPost(response.data);
      });
    console.log(post);
  }

  //if (!post) return null;
  function createPost2() {
    axios
      .post(baseURLTask2, {
        sentence: TextInputPOS,
      })
      .then((response) => {
        setPost2(response.data);
      });
    console.log(post2);
  }

  function createPost22() {
    axios
      .post(baseURLTask2, {
        sentence: TxtFile,
      })
      .then((response) => {
        setPost2(response.data);
      });
    console.log(post2);
  }

  function createPost3() {
    axios
      .post(baseURLTask3, {
        sentence: TextInputNER,
      })
      .then((response) => {
        setPost3(response.data);
      });
    console.log(post3);
  }

  function createPost32() {
    const output = [];
    for (let i in TxtFile2) {
      axios
        .post(baseURLTask3, {
          sentence: TxtFile2[i],
        })
        .then((response) => {
          output.push(response.data);
        });
    }

    setPost4(output.reverse());
    console.log(post4);
  }

  return (
    <Container fluid>
      <Row style={{ backgroundColor: "#DABBFF" }}>
        <Col>
          <h1>APIs Demo</h1>
        </Col>
      </Row>
      <Row
        style={{
          padding: "1rem",
          height: "30rem",
          backgroundColor: "#B7F0FF",
          maxHeight: "35rem",
        }}
      >
        <h2>1. Word Segmentation</h2>
        <Col lg={5}>
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
        <Col lg={7}>
          <Card className="output-card-1">
            <Card.Header>Output</Card.Header>
            <Card.Body style={{ height: "10rem", overflowY: "auto" }}>
              {post &&
                post.map((v, i) => (
                  <span
                    style={{
                      margin: "1rem",
                      padding: "0.5rem",
                      backgroundColor: "#EEBFFF",
                    }}
                    key={i}
                  >
                    {v.map((a, b) => (
                      <span
                        style={{
                          margin: "1rem",
                          padding: "0.5rem",
                          backgroundColor: "#EEBFFF",
                        }}
                        key={b}
                      >
                        {a[0]}:{a[1]}
                      </span>
                    ))}
                  </span>
                ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row
        style={{
          padding: "1rem",
          height: "30rem",
          backgroundColor: "#FFD7C3",
          maxHeight: "35rem",
        }}
      >
        <h2>2. POS Tagging</h2>
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
                  setTextInputPOS(e.target.value);
                }}
              />
            </Form.Group>
            <Button onClick={createPost2}>Go</Button>
          </Form>
          <Form>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label>Please upload your text file.</Form.Label>
              <Form.Control
                type="file"
                size="lg"
                onChange={showFile}
                multiple={false}
              />
            </Form.Group>

            <Button onClick={createPost22}>Go</Button>
          </Form>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>Output</Card.Header>
            <Card.Body style={{ height: "10rem", overflowY: "auto" }}>
              {post2 &&
                post2.map((v, i) => (
                  <span
                    style={{
                      margin: "1rem",
                      padding: "0.5rem",
                      backgroundColor: "#EEBFFF",
                    }}
                    key={i}
                  >
                    {v[0]}:{v[1]}
                  </span>
                ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row
        style={{
          padding: "1rem",
          height: "35rem",
          backgroundColor: "#FFC3F3",
          maxHeight: "40rem",
        }}
      >
        <h2>3. NER Tagging</h2>
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
                  setTextInputNER(e.target.value);
                }}
              />
            </Form.Group>
            <Button onClick={createPost3}>Go</Button>
          </Form>
          <Form>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label>Please upload your text file.</Form.Label>
              <Form.Control
                type="file"
                size="lg"
                onChange={showFile2}
                multiple={false}
              />
            </Form.Group>

            <Button onClick={createPost32}>Go</Button>
          </Form>
        </Col>
        <Col lg={6}>
        <Card >
            <Card.Header>Output from Textarea</Card.Header>
            <Card.Body style={{ height: "10rem", overflowY: "auto" }}>
              {post3 &&
                post3.map((v, i) =>
                    <span
                      style={{
                        margin: "1rem",
                        padding: "0.5rem",
                        backgroundColor: "#EEBFFF",
                      }}
                      key={i}
                    >
                      {v[0] + ' : ' + v[1]}
                    </span>
                
                )}
            </Card.Body>
          </Card>

          <Card style={{marginTop: '1rem'}}>
            <Card.Header>Output from file</Card.Header>
            <Card.Body style={{ height: "10rem", overflowY: "auto" }}>
              {post4 &&
                post4.map((v, i) =>
                  v.map((a, b) => (
                    <span
                      style={{
                        margin: "1rem",
                        padding: "0.5rem",
                        backgroundColor: "#EEBFFF",
                      }}
                      key={b}
                    >
                      {a[0] + ' : ' + a[1]}
                    </span>
                  ))
                )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row
        style={{
          padding: "1rem",
          height: "30rem",
          backgroundColor: "#C2FFAC",
          maxHeight: "35rem",
        }}
      >
        <h2>4. Sentence Segmentation</h2>
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
                  setTextInputSS(e.target.value);
                }}
              />
            </Form.Group>
            <Button>Go</Button>
          </Form>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>Output</Card.Header>
            <Card.Body
              style={{ height: "10rem", overflowY: "auto" }}
            ></Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
