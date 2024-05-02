import React from "react";
import {
  Carousel,
  Row,
  Col,
  Dropdown,
  Form,
  Button,
  InputGroup,
  Image,
  Container,
  Figure,
  ListGroup,
  Modal,
} from "react-bootstrap";
import "./Style.css";

function App() {
  return (
    <div>
      <Container>
        {/* baris atas */}
        <Row>
          <Col>
            <Container
              className="text-center mt-3"
              style={{ backgroundColor: "#f8f9fa" }}
            >
              <h1>Belajar 8</h1>
              <p>Selamat Datang di Situs Belajar Saya</p>
              <Button variant="primary">Lebih Lengkap</Button>
            </Container>
          </Col>
          <Col>
            <Dropdown className="text-center">
              <Dropdown.Toggle variant="success">
                Pilih Maskapai
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/">Garuda Indonesia</Dropdown.Item>
                <Dropdown.Item href="/">Pelita Air</Dropdown.Item>
                <Dropdown.Item href="/">Air Asia</Dropdown.Item>
                <Dropdown.Item href="/">Super Jet</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        {/* baris konten */}
        <Row>
          <Col className="d-flex justify-content-center">
            <Image
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/foodsmall.jpg"
              roundedCircle
              className="align-items-center"
            />
          </Col>
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
            <Form>
              <Form.Group>
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Masukkan Nama" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Username</Form.Label>

                <InputGroup className="mb-3">
                  <InputGroup.Text>@</InputGroup.Text>
                  <Form.Control placeholder="Username" />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <Form.Label>Alamat Email</Form.Label>
                <Form.Control type="email" placeholder="Masukkan Email" />
                <Form.Text className="text-muted">
                  Kami tidak akan menyalahgunakan email kamu
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Masukkan Password" />
              </Form.Group>
              <Form.Group>
                <Form.Check type="checkbox" label="Saya Setuju" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Baris baru */}
        <Row className="mt-3">
          <Col>
            <Figure>
              <Figure.Image
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"
                alt="nasi padang"
                width={270}
                height={280}
              />
              <Figure.Caption>
                Nasi Padang, Makanan Melegenda Asal Indonesia
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <ListGroup>
              <ListGroup.Item action>Nasi Padang</ListGroup.Item>
              <ListGroup.Item action>Sate Madura</ListGroup.Item>
              <ListGroup.Item action>Ayam Geprek</ListGroup.Item>
              <ListGroup.Item action>Bebek Panggang</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>Info</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Simpan Data Pelanggan</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save Changes</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
