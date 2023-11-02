import React from 'react';
import './Home.css';


const Home = () => {
  return (
    <div className="home">
    
      <header>
        <h1 className="welcome-heading">Welcome to Botanic Bazaar</h1>
        <h3>Your Path to Greenish Life</h3>
      </header>
      <div className="about">
        <h2>About Us</h2>
        <p >&nbsp;Welcome to Botanic Bazaar, where nature meets style. We are passionate about plants and the beauty they bring to our lives. Our store is a haven for plant enthusiasts, gardeners, and anyone who appreciates the wonders of the natural world.</p>
        <p>  Botanic Bazaar was founded with a simple yet profound vision: to make the world a greener, more vibrant place. Our journey began when a group of avid botanists and gardeners came together, driven by a shared love for all things green and growing. We saw the need for a place where people could find high-quality plants, gardening supplies, and expert guidance in creating their very own green oasis.</p>
     </div>
      </div>
  );
};

export default Home;