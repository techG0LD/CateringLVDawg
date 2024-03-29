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


        {/* <Row className ="secA">
          <Col>
          <br/>
          <Card>
            <Card.Header as="h3">My Mission</Card.Header>
            <Card.Body>
              <Card.Title>"I believe that food is not just a necessity, but an art. I strive to create dishes that are not only delicious, but also beautiful, healthy, and sustainable. I use fresh, local, and organic ingredients whenever possible, and I respect the diversity and preferences of our clients."</Card.Title>
              <Card.Text>
              I am passionate about food and service. I provide you with a memorable and satisfying experience, from the first consultation to the last bite. Committed to excellence, innovation, and customer satisfaction. Chef Top Dawg is more than just a catering company, I'm your partner in creating unforgettable events.
              </Card.Text>
            </Card.Body>
          </Card>
          <br/>
          </Col>
        </Row> */}

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
      
          
          
      
      {/* Header */}
      {/* <div className="hero">
        <h1></h1>
        <img src='' alt='Chef Kellz'></img>
        <p></p>
      </div> */}


      {/* About */}
      

      {/* Gallery dishes */}
      {/* <div className="dishes">
        
        <div className="dish-cards">
          
          <div className="dish">
            <img src="http://placekitten.com/100" alt="A fresh and colorful salad" />
            <p>A fresh and colorful salad with mixed greens, cherry tomatoes, cucumbers, carrots, and a tangy dressing.</p>
          </div>
         
          <div className="dish">
            <img src="http://placekitten.com/100" alt="A creamy and cheesy pasta" />
            <p>A creamy and cheesy pasta with penne, chicken, mushrooms, spinach, and parmesan cheese.</p>
          </div>
       
          <div className="dish">
            <img src="http://placekitten.com/100" alt="A decadent and moist chocolate cake" />
            <p>A decadent and moist chocolate cake with layers of rich chocolate ganache and whipped cream.</p>
          </div>
        </div>
      </div> */}




      {/*services section */}
            {/* <div className="services"> */}
              
              
              {/* <ul>
                <li>Weddings</li>
                <li>Birthdays</li>
                <li>Corporate Events</li>
                <li>Family Gatherings</li>
                <li>And more!</li>
              </ul> */}
              
              {/* <ul>
                <li>Buffet</li>
                <li>Plated</li>
                <li>Cocktail</li>
                <li>Vegan</li>
                <li>Gluten-Free</li>
                <li>Special Diets</li>
              </ul>
            </div> */}





      {/*  mission statement/ vision and values */}
       {/* <div className="mission">
        <h2>My Mission</h2>
        <div className="mission-rows"> */}
          {/* quote */}
          {/* <div className="mission-quote">
            <p>"I believe that food is not just a necessity, but an art. I strive to create dishes that are not only delicious, but also beautiful, healthy, and sustainable. I use fresh, local, and organic ingredients whenever possible, and I respect the diversity and preferences of our clients."</p>
          </div> */}
          {/* summary of the quote */}
          {/* <div className="mission-summary">
            <p>I am passionate about food and service. I provide you with a memorable and satisfying experience, from the first consultation to the last bite. Committed to excellence, innovation, and customer satisfaction. Chef Top Dawg is more than just a catering company, I'm your partner in creating unforgettable events.</p>
          </div>
        </div>
        </div>  */}




      





      {/* more images */}
      
      {/* footer  */}
      {/* <div className="footer">
        <div className="footer-columns"> */}
          {/* contact us information */}
          {/* <div className="contact">
            
          </div> */}
          {/* second column : form to submit a request */}
          {/* <div className="form">
            <h3>Have an inquiry?</h3>
            <p>Please fill out the form below and I will get back to you as soon as possible.</p>
            <form >
           
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
              <label for="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone" />
              <label for="event">Event Type:</label>
              <select id="event" name="event" required>
                <option value="">Select an event type</option>
                <option value="wedding">Wedding</option>
                <option value="birthday">Birthday</option>
                <option value="corporate">Corporate</option>
                <option value="family">Family</option>
                <option value="other">Other</option>
              </select>
              <label for="date">Event Date:</label>
              <input type="date" id="date" name="date" required />
              <label for="guests">Number of Guests:</label>
              <input type="number" id="guests" name="guests" min="1" required />
              <label for="menu">Menu Preference:</label>
              <select id="menu" name="menu" required>
                <option value="">Select a menu preference</option>
                <option value="buffet">Buffet</option>
                <option value="plated">Plated</option>
                <option value="cocktail">Cocktail</option>
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Gluten-Free</option>
                <option value="other">Other</option>
              </select>
              <label for="message">Additional Message:</label>
              <textarea id="message" name="message" placeholder="Enter any additional message"></textarea>
              <button type="submit">Submit</button>
            </form>
          </div> */}

       {/*  </div>
      </div> */}
    </div>
  );
}

export default App;
