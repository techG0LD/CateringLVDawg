//import { BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import { Card } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'


function App() {


  
  return (
    <div className="App">
      <Container >
      <Navbar bg="dark" data-bs-theme="dark" expand="md">
        <Container>
          <Navbar.Brand href="#home">Chef Top Dawg Catering Co.</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br/>
        <Card  style={{margin:"auto"}} className="secA bg-dark text-white">
            <Card.Img style={{height:"50vh"}}
              src="hero.jpeg" alt="Card image" />
            <Card.ImgOverlay className="custom-overlay">
              <Card.Title >Chef Top Dawg</Card.Title>
              <Card.Text>
                Make your events delicious and memorable
              </Card.Text>
              
             
            </Card.ImgOverlay>
        </Card>
        <br/>
        
        <br/>
        <Row className ="secA">
          <h3>My Crafted Dishes</h3>
          <Col>
            <Card>
              <Card.Img style={{height:"30vh"}} variant="top" src="crab.jpeg" alt="A fresh and colorful salad" />
              <Card.Body>
                <Card.Text>
                Ocean's Bounty on a Plate: A Sumptuous Crab Boil Bursting with Steamed Crabs, Spicy Sausages, Corn on the Cob, and Buttery Red Potatoes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img style={{height:"30vh"}} variant="top" src="burger.jpeg" alt="A creamy and cheesy pasta" />
              <Card.Body>
                <Card.Text>
                Savor the Juicy Bliss: A Symphony of Flame-Grilled Angus Beef, Melted Aged Cheddar, Caramelized Onions, and Sun-Kissed Tomato Relish, All Nestled Between Pillowy Brioche Buns.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img style={{height:"30vh"}} variant="top" src="wings.jpeg" alt="A decadent and moist chocolate cake"/>
              <Card.Body>
                <Card.Text>
                Indulge in Winged Perfection: Crispy, Golden-Brown Wings Glazed with a Tangy Honey Sriracha Sauce, Sprinkled with Fresh Chopped Cilantro and Lime Zest.
                </Card.Text>
              </Card.Body>
            </Card>
            <br/>
            <br/>
          </Col>
          
        </Row>
        <br/>

        <Row className ="secB" id="services">
          <h3>Services</h3>
          <Col>
          
          <p>Catering for any occasion, such as, but not LIMITED to...</p>
          <ListGroup variant="">
            <ListGroup.Item>Wedding</ListGroup.Item>
            <ListGroup.Item>Birthday Celebration</ListGroup.Item>
            <ListGroup.Item>Graduations</ListGroup.Item>
            <ListGroup.Item>Company events</ListGroup.Item>
            <ListGroup.Item>Family Gatherings</ListGroup.Item>
          </ListGroup>
          
          <br/>

          <p> Chef Top Dawg can craft menus to suit your needs, TAILORING the experience</p>
          <ListGroup variant="">
            <ListGroup.Item>Buffet</ListGroup.Item>
            <ListGroup.Item>Plated</ListGroup.Item>
            <ListGroup.Item>Cocktail</ListGroup.Item>
            <ListGroup.Item>Vegan</ListGroup.Item>
            <ListGroup.Item>Gluten-Free</ListGroup.Item>
            
          </ListGroup>
          <br/>
          </Col>
         
         
        </Row>


        <br/>
        
        <Row className='secA'>
        <Col xs={12} md={6}>
        <div className='portrait'>
              <img src='kelz.jpeg' alt='potrait'></img>
        </div>
        </Col>
          <Col xs={12} md={6}  className='mt-4'>
          
          <p>
            <strong>"I believe that food is not just a necessity, but an art. I strive to create dishes that are not only delicious, but also beautiful, healthy, and sustainable. I use fresh, local, and organic ingredients whenever possible, and I respect the diversity and preferences of our clients."</strong>
          </p>
          <p>
            I am passionate about food and service. I provide you with a memorable and satisfying experience, from the first consultation to the last bite. Committed to excellence, innovation, and customer satisfaction. Chef Top Dawg is more than just a catering company; I'm your partner in creating unforgettable events.
          </p>

         
          </Col>
        </Row>


        

        <br/>
        <Row className="secB" id="contact-us">
          <h3>Contact Us</h3>
          <Col xs={12} md={6} className="d-flex flex-column ">
            <div className='logo'>
              <img src='logo.jpeg' alt='logo'></img>
            </div>
            <br></br>
            <p>Phone: (312) 907-9009</p>
            <p>Email: mzqueen711@gmail.com</p>
            <p>Instagram: @chef_top_dawg_lv </p>
          </Col>

          <Col xs={12} md={6}>
          <h4>Have an inquiry?</h4>
            
            <p>Please fill out the form below and I will get back to you as soon as possible.</p>
            <Form >
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Label>Phone #</Form.Label>
                  <Form.Control type="tel" placeholder="Enter Phone number" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Enter E-mail" required/>
              </Form.Group>

                <Form.Group  className="mb-3" controlId="formGridEvent">
                  <Form.Label>Event/Occasion</Form.Label>
                  <Form.Select defaultValue="Select an event type">
                    <option value="">Select an event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday</option>
                    <option value="corporate">Corporate</option>
                    <option value="family">Family</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Form.Group>

              <Row>
                <Form.Group className="mb-3" as={Col} controlId="formGridDate">
                  <Form.Label>Event Date</Form.Label>
                  <Form.Control type="date"  />
                </Form.Group>

                <Form.Group className="mb-3" as={Col} controlId="formGridParty">
                  <Form.Label>Party size</Form.Label>
                  <Form.Control type="number" placeholder="Enter number of guests" required/>
                </Form.Group>
              </Row>
           
              <Form.Group  className="mb-3" controlId="formGridMenu">
                  <Form.Label>Event/Occasion</Form.Label>
                  <Form.Select defaultValue="Select an menu preference">
                    <option value="">Select an menu preference</option>
                    <option value="buffet">Buffet</option>
                    <option value="plated">Plated</option>
                    <option value="cocktail">Cocktail</option>
                    <option value="vegan">Vegan</option>
                    <option value="gluten-free">Gluten-Free</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Form.Group>

                
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Additional Message</Form.Label>
                  <Form.Control type="text" placeholder="Enter any additional message" />
                </Form.Group>
              <br></br>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <br></br>
          </Col> 
        </Row>
       



      </Container>
     
    </div>
  );
}

export default App;
