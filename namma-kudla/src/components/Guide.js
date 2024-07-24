import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const guides = [
  {
    name: 'Manish',
    description: 'Expert in local history and cultural tours.',
    image: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png', 
    contact: {
      email: 'manish@email.com',
      phone: '+1234567890',
    },
  },
  {
    name: 'Manvi',
    description: 'Specialist in culinary and food tours.',
    image: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png', 
    contact: {
      email: 'manvi@email.com',
      phone: '+1234567890',
    },
  },
  {
    name: 'Shravya',
    description: 'Adventure and outdoor activities guide.',
    image: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png', 
    contact: {
      email: 'shravya@email.com',
      phone: '+1234567890',
    },
  },
  // Add more guide objects as needed
];

function Guide() {
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2>Meet Our Guides</h2>
          <p>Our experienced guides are here to make your journey unforgettable. They offer personalized tours and share in-depth knowledge of Mangalore's vibrant culture and attractions.</p>
        </Col>
      </Row>
      <Row>
        {guides.map((guide, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img 
                variant="top" 
                src={guide.image} 
                style={{
                  width: '100px',  // Set the desired width
                  height: '100px', // Set the desired height
                  objectFit: 'cover', // Ensures the image covers the container without distortion
                  borderRadius: '50%', // Optional: makes the image round
                  margin: '20px auto', // Centers the image inside the card
                }}
              />
              <Card.Body>
                <Card.Title>{guide.name}</Card.Title>
                <Card.Text>{guide.description}</Card.Text>
                <p><strong>Contact:</strong></p>
                <Button variant="info" onClick={() => handleEmailClick(guide.contact.email)}>Email</Button>{' '}
                <Button variant="info" onClick={() => handlePhoneClick(guide.contact.phone)}>Call</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Guide;
