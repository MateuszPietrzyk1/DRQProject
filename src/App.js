import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Row, Col, Image, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header >
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">DISHES4U</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <NavDropdown title="Recipes" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <main>
        <Container>
          <Row className="px-4 my-5">
            <Col sm={8}>
              <Image src="https://i.pinimg.com/originals/b5/63/28/b5632893304e57cfef9a0a799a7c4008.jpg"
                fluid
                rounded
              />

            </Col>
            <Col sm={4}>
              <h1>Welcome to our best recipes website !!!</h1>
            </Col>
          </Row>
          <Row>
            <Card className="text-center bg-secondary text-white my-5 py-4">
              <Card.Body>Try some of our  most popular dinner recipes from around the world. Travel overseas without leaving your kitchen and enjoy the tastes from exotic locations..</Card.Body>
            </Card>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://th.bing.com/th/id/R.c0de61d572f8f385774e4b6503082c1b?rik=3lwecQPnM9491w&pid=ImgRaw&r=0" />
                <Card.Body>
                  <Card.Title>Sushi (Japan)</Card.Title>
                  <Card.Text>
                  Japan wants to build something interesting; therefore, the Japanese discovered a raw fish and rice dish.

When the fish and rice put together, it makes a tasty dish name Sushi. This one is so popular in Asian restaurants
                  </Card.Text>
                  <Button variant="primary">Go Recipe</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.tripfore.com/wp-content/uploads/2020/04/Lasagna.jpg" />
                <Card.Body>
                  <Card.Title>Lasagna (Italy)</Card.Title>
                  <Card.Text>
                  Lasagna is famed Italian food, which is the all-time favorite dish of kids and adults. Layers are made with tomato sauce, chicken, or cheese, and it’s so tasty.
                  </Card.Text>
                  <Button variant="primary">Go Recipe</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.twopeasandtheirpod.com/wp-content/uploads/2015/07/Grilled-Steak-Fajitas-3.jpg" />
                <Card.Body>
                  <Card.Title>Fajitas (Mexico)</Card.Title>
                  <Card.Text>
                  Fajitas is an amazing dining experience in which meat is used along with side servings of capsicum, onion, guacamole, sour cream, and salsa. It’s a healthy dish which is used all around the world.
                  </Card.Text>
                  <Button variant="primary">Go Recipe</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <footer class="py-5 my-5 bg-dark">

      </footer>
    </div>
  );
}

export default App;