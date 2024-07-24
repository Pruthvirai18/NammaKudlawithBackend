import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Blog() {
  // Placeholder for blog posts data
  const posts = [
    { id: 1, title: 'St.Aloysius Chapel', description: 'St. Aloysius Chapel in Mangalore showcases stunning frescoes by Antonio Moscheni, making it a cultural and artistic treasure.', image: 'https://mangaloretourism.in/images/places-to-visit/header/st-aloysius-chapel-mangalore-tourism-entry-fee-timings-holidays-reviews-header.jpg' },
    { id: 2, title: 'Sultan Battery', description: 'Sultan Battery, an ancient watchtower built by Tipu Sultan, offers panoramic views of the Arabian Sea, blending history with scenic beauty in Mangalore.', image: 'http://aroundmangalore.com/wp-content/uploads/2014/04/IMG_20140316_180308.jpg' },
    { id: 3, title: 'Kadri Manjunath Temple', description: 'Kadri Manjunath Temple in Mangalore, dedicated to Lord Manjunatha, features a historic bronze statue and serene surroundings, attracting devotees and history enthusiasts alike.', image: 'https://www.mangalatravels.com/wp-content/uploads/2018/10/kadri-manjunatheshwara-temple-main.jpg' }
  ];

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2>Blog</h2>
        </Col>
      </Row>
      <Row>
        {posts.map(post => (
          <Col md={4} key={post.id} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={post.image} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                <Link to={`/post/${post.id}`} className="btn btn-primary">Read More</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Blog;
