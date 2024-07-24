//src/components/Blogger.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const bloggers = [
  {
    name: 'Siri',
    description: 'Adventure enthusiast exploring cultural places.',
    image: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png',
    posts: [
      {
        title: 'Hiking the Inca Trail: A Journey to Machu Picchu',
        date: 'June 1, 2023',
        link: '/blog/post/hiking-inca-trail',
      },
      
    ],
  },
  {
    name: 'Vishwa',
    description: 'Foodie exploring local cuisines and culinary delights across the globe.',
    image: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png',
    posts: [
      {
        title: 'Tasting Tokyo: A Culinary Adventure in Japan',
        date: 'May 15, 2023',
        link: '/blog/post/tasting-tokyo',
      },
      
    ],
  },
  
];

function Blogger() {
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2>Meet Our Bloggers</h2>
          <p>Read engaging stories and travel experiences shared by our bloggers.</p>
        </Col>
      </Row>
      <Row>
        {bloggers.map((blogger, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img 
                variant="top" 
                src={blogger.image} 
                style={{ width: '150px', height: '150px', objectFit: 'cover' }} // Adjust width and height as needed
              />
              <Card.Body>
                <Card.Title>{blogger.name}</Card.Title>
                <Card.Text>{blogger.description}</Card.Text>
                <Button variant="primary" href={`/bloggers/${index}`}>View Blog Posts</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Blogger;
