// Post.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const posts = [
  { id: '1', title: 'St.Aloysius Chapel', content: 'A historic marvel known for its stunning architecture and exquisite interior frescoes by Italian Jesuit Antonio Moscheni. The chapel, situated within the St. Aloysius College campus, dates back to the late 19th century and is renowned for its artistic beauty, making it a must-visit for art and history enthusiasts.A historic marvel known for its stunning architecture and exquisite interior frescoes by Italian Jesuit Antonio Moscheni. The chapel, situated within the St. Aloysius College campus, dates back to the late 19th century and is renowned for its artistic beauty, making it a must-visit for art and history enthusiasts.', image: 'https://mangaloretourism.in/images/places-to-visit/header/st-aloysius-chapel-mangalore-tourism-entry-fee-timings-holidays-reviews-header.jpg' },
  { id: '2', title: 'Sultan Battery', content: 'This ancient watchtower, built by Tipu Sultan, offers panoramic views of the Arabian Sea. Located in Boloor, it served as a strategic defense point during Tipu Sultans rule. Today, visitors can explore its historical significance while enjoying a scenic view of the coastline and nearby islands.', image: 'http://aroundmangalore.com/wp-content/uploads/2014/04/IMG_20140316_180308.jpg' },
  { id: '3', title: 'Kadri Manjunath Temple', content: 'Kadri Manjunath Temple in Mangalore, dedicated to Lord Manjunatha, features a historic bronze statue and serene surroundings, attracting devotees and history enthusiasts alike.One of the oldest temples in Mangalore, Kadri Manjunath Temple is dedicated to Lord Manjunatha, an incarnation of Lord Shiva. The temple is known for its unique bronze statue of Lord Lokeshwara dating back to the 10th century. Surrounded by hills and greenery, it attracts devotees and tourists alike for its spiritual ambiance and architectural significance.', image: 'https://www.mangalatravels.com/wp-content/uploads/2018/10/kadri-manjunatheshwara-temple-main.jpg' }
];

function Post() {
  const { id } = useParams();
  const post = posts.find(post => post.id === id);

  if (!post) {
    return (
      <Container>
        <Row className="my-4">
          <Col>
            <h2>Post not found</h2>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2>{post.title}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={post.image} alt={post.title} className="img-fluid" />
          <p>{post.content}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Post;
