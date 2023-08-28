import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Price from './components/Price'; 
import Product from './components/Product';
import imageInSrc from './imageInSrc.jpg'; 

const App = () => {
  const firstName = prompt("Enter your name:") || ""; // Set the default value of firstName
  const showImage = firstName === 'oussama'; // Determine whether to show the image

  return (
    <div className="d-flex flex-column align-items-center p-5 bg-dark">
      <Card className="mb-4" style={{ width: '18rem' }}>
  <div className="image-container d-flex flex-column align-items-center" >
    <Card.Img
      variant="top"
      style={{ height: '150px', objectFit: 'cover', width: '160px' }}
      src={Product.image}
    />
  </div>
  <Card.Body>
    <Card.Title>{Product.name}</Card.Title>
    <Card.Text>{Product.description}</Card.Text>
    <Price />
    <Button variant="warning">Buy Now</Button>
  </Card.Body>
</Card>

      <div className="mb-4">
      {showImage && <img src={imageInSrc} alt="Profile" style={{ width: '100px', height: '100px' }} />} 
        <p className='text-white'>Hello, {firstName === 'oussama' ? 'oussama' : 'there'}!</p>
      </div>
    </div>
  );
};

export default App;
