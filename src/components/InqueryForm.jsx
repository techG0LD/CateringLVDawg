import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [occ, setOcc] = useState('');
  const [date, setDate] = useState('');
  const [party,setParty] = useState('')
  const [menu,setMenu] = useState('')
  const [message,setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);

    const data = {
      name: name,
      phone: phone,
      email: email,
      occ: occ,
      date: date,
      party: party,
      menu: menu,
      message: message
      
    };

    fetch('https://cheftopdawg.netlify.app/form-submit', {
    // fetch('http://localhost:5000/form-submit', {  developement
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
      setIsSubmitting(false);
    });
  }



  return (
    <>
    <Form onSubmit= {handleSubmit}>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" required value={name} onChange={e => setName(e.target.value)}/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPhone">
        <Form.Label>Phone #</Form.Label>
        <Form.Control type="tel" placeholder="Enter Phone number" required value={phone} onChange={e => setPhone(e.target.value)}/>
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="formGridEmail">
      <Form.Label>E-mail</Form.Label>
      <Form.Control value={email} required type="email" placeholder="Enter E-mail" onChange={e => setEmail(e.target.value)} />
    </Form.Group>

      <Form.Group  className="mb-3" controlId="formGridEvent">
        <Form.Label>Event/Occasion</Form.Label>
        <Form.Select  value={occ} onChange={e => setOcc(e.target.value)}>
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
        <Form.Control type="date" value={date} onChange={e => setDate(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" as={Col} controlId="formGridParty">
        <Form.Label>Party size</Form.Label>
        <Form.Control type="number" value={party} placeholder="Enter number of guests" onChange={e => setParty(e.target.value)} />
      </Form.Group>
    </Row>
 
    <Form.Group  className="mb-3" controlId="formGridMenu">
        <Form.Label>Menu preference</Form.Label>
        <Form.Select  value={menu} onChange={e => setMenu(e.target.value)}>
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
        <Form.Control type="text" placeholder="Enter any additional message" value={message} onChange={e => setMessage(e.target.value)}/>
      </Form.Group>
    <br></br>
    <Button variant="primary" type="submit" disabled={isSubmitting}>
      {isSubmitting ? 'Sent!' : 'Submit'}
     
    </Button>
  </Form>
  </>
  );
}

export default ContactForm;