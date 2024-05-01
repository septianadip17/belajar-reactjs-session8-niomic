import React from "react";
import { Carousel, Row, Col, Dropdown } from "react-bootstrap";

function App() {
  return (
    <div>
      <Row>
        <Col>
          <h1 className="text-center">Belajar 8</h1>
        </Col>
        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="success">Pilih Maskapai</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/">Garuda Indonesia</Dropdown.Item>
              <Dropdown.Item href="/">Pelita Air</Dropdown.Item>
              <Dropdown.Item href="/">Air Asia</Dropdown.Item>
              <Dropdown.Item href="/">Super Jet</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel1.jpeg"
                alt="travel1"
                className="d-block w-100"
              />
              <Carousel.Caption>
                <h3>Pesawat Tiket Murah 1</h3>
                <p>Dapatkan Promo Tiket Pesawat Murah 1</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel2.png"
                alt="travel2"
                className="d-block w-100"
              />
              <Carousel.Caption>
                <h3>Pesawat Tiket Murah 2</h3>
                <p>Dapatkan Promo Tiket Pesawat Murah 2</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel3.jpeg"
                alt="travel3"
                className="d-block w-100"
              />
              <Carousel.Caption>
                <h3>Pesawat Tiket Murah 3</h3>
                <p>Dapatkan Promo Tiket Pesawat Murah 3</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col>
          <h1>pilih aja</h1>
        </Col>
      </Row>
    </div>
  );
}

export default App;
