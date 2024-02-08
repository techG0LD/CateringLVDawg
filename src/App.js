//import { BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom';
import './App.css';

function App() {


  
  return (
    <div className="App">
      
      {/* Header */}
      <div className="hero">
        <h1>Chef Top Dawg</h1>
        <img src='http://placekitten.com/200' alt='Chef Kellz'></img>
        <p>Make your events delicious and memorable</p>
      </div>
      {/* About */}
      <div className="about">
        <h2>About Me</h2>
        <p>Hi, I'm Kellz, the owner and chef of Chef Top Dawg Catering . I have been in the catering business for over 10 years, and I love creating mouth-watering dishes for all kinds of occasions. Whether it's a wedding, a birthday, a corporate event, or a family gathering, I can provide you with a customized menu that suits your taste and budget.</p>
      </div>

      {/* Gallery dishes */}
      <div className="dishes">
        <h2>My Crafted Dishes</h2>
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
      </div>




      {/*services section */}
            <div className="services">
              <h2>Services</h2>
              <p>variety of catering services for any occasion, such as:</p>
              <ul>
                <li>Weddings</li>
                <li>Birthdays</li>
                <li>Corporate Events</li>
                <li>Family Gatherings</li>
                <li>And more!</li>
              </ul>
              <p> Chef Top Dawg can craft menus to suit your needs, such as:</p>
              <ul>
                <li>Buffet</li>
                <li>Plated</li>
                <li>Cocktail</li>
                <li>Vegan</li>
                <li>Gluten-Free</li>
                <li>Special Diets</li>
              </ul>
            </div>





      {/*  mission statement/ vision and values */}
      <div className="mission">
        <h2>My Mission</h2>
        <div className="mission-rows">
          {/* quote */}
          <div className="mission-quote">
            <p>"I believe that food is not just a necessity, but an art. I strive to create dishes that are not only delicious, but also beautiful, healthy, and sustainable. I use fresh, local, and organic ingredients whenever possible, and I respect the diversity and preferences of our clients."</p>
          </div>
          {/* summary of the quote */}
          <div className="mission-summary">
            <p>I am passionate about food and service. I provide you with a memorable and satisfying experience, from the first consultation to the last bite. Committed to excellence, innovation, and customer satisfaction. Chef Top Dawg is more than just a catering company, I'm your partner in creating unforgettable events.</p>
          </div>
        </div>
      </div>




      





      {/* more images */}
      
      {/* footer  */}
      <div className="footer">
        <div className="footer-columns">
          {/* contact us information */}
          <div className="contact">
            <h3>Contact Us</h3>
            <p>Phone: (123) 456-7890</p>
            <p>Email: cateringco@gmail.com</p>
            <p>Address: 123 Main Street, Las Vegas, NV 89101</p>
          </div>
          {/* second column : form to submit a request */}
          <div className="form">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
