import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function APIDetail() {
  const ex1 = '{"title": "หัวหินเป็นถิ่นมีหอย"}';
  const ex2 = '{"sentence": "หัวหินเป็นถิ่นมีหอย"}';
  const ex1_1 = `axios
  .post(baseURLTask1, {
    title: TextInputWS,
  })
  .then((response) => {
    setPost(response.data);
  });`;
  const ex2_1 = `axios
  .post(baseURLTask2, {
    title: TextInputPOS,
  })
  .then((response) => {
    setPost(response.data);
  });`;
  const ex3_1 = `axios
  .post(baseURLTask3, {
    sentence: TextInputNER,
  })
  .then((response) => {
    setPost(response.data);
  });`;
  const ex4_1 = `axios
  .post(baseURLTask4, {
    sentence: TextInputSS,
  })
  .then((response) => {
    setPost(response.data);
  });`;

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
          height: "35rem",
          backgroundColor: "#B7F0FF",
          maxHeight: "45rem",
        }}
      >
        <Col lg={6}>
          <h3>Word Segmentation</h3>
          <span>http://nlp1.the-scamper.superai.me:10100/word</span>
          <br />
          <span>
            <b>Input:</b> json
          </span>
          <br />
          <i>Example:</i>
          <span>{ex1}</span>
          <br />
          <span>using Axios</span>
          <br />
          <span>{ex1_1}</span>
          <br />
          <span>
            <b>Output:</b> json
          </span>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <Image
            fluid
            src={require("../Img/task-1-img.png")}
            style={{ width: "40rem" }}
            thumbnail
          />
        </Col>
      </Row>
      <Row
        style={{
          padding: "1rem",
          height: "35rem",
          backgroundColor: "#FFD7C3",
          maxHeight: "45rem",
        }}
      >
        <Col lg={6} md={6} sm={12}>
          <h3>POS Tagging</h3>
          <span>http://nlp1.the-scamper.superai.me:10200/pos</span>
          <br />
          <span>
            <b>Input:</b> json
          </span>
          <br />
          <i>Example:</i>
          <span>{ex2}</span>
          <br />
          <span>using Axios</span>
          <br />
          <span>{ex2_1}</span>
          <br />
          <span>
            <b>Output:</b> json
          </span>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <Image
            fluid
            src={require("../Img/task-2-img.png")}
            style={{ width: "40rem" }}
            thumbnail
          />
        </Col>
      </Row>
      <Row
        style={{
          padding: "1rem",
          height: "35rem",
          backgroundColor: "#EEBFFF",
          maxHeight: "45rem",
        }}
      >
         <Col lg={6}>
          <h3>NER Tagging</h3>
          <span>http://nlp1.the-scamper.superai.me:10300/ner</span>
          <br />
          <span>
            <b>Input:</b> json
          </span>
          <br />
          <i>Example:</i>
          <span>{ex2}</span>
          <br />
          <span>using Axios</span>
          <br />
          <span>{ex3_1}</span>
          <br />
          <span>
            <b>Output:</b> json
          </span>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <Image
            fluid
            src={require("../Img/task-3-img.png")}
            style={{ width: "40rem" }}
            thumbnail
          />
        </Col>
      </Row>
      <Row
        style={{
          padding: "1rem",
          height: "35rem",
          backgroundColor: "#C2FFAC",
          maxHeight: "45rem",
        }}
      >
         <Col lg={6}>
          <h3>Sentence Segmentation</h3>
          <span>http://nlp1.the-scamper.superai.me:10400/sentence</span>
          <br />
          <span>
            <b>Input:</b> json
          </span>
          <br />
          <i>Example:</i>
          <span>{ex2}</span>
          <br />
          <span>using Axios</span>
          <br />
          <span>{ex4_1}</span>
          <br />
          <span>
            <b>Output:</b> json
          </span>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <Image
            fluid
            src={require("../Img/task-4-img.png")}
            style={{ width: "40rem" }}
            thumbnail
          />
        </Col>
      </Row>
    </Container>
  );
}

export default APIDetail;
