import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Gallery() {
  // Placeholder for gallery images
  const photos = [
    {
      src: 'https://i.pinimg.com/originals/40/0f/ff/400fff1dd8c7c78b8eac59cd59e268d5.jpg',
      label: 'Kudroli Gokarnath Temple'
    },
    {
      src: 'https://mangaloretourism.in/images/places-to-visit/header/nitk-surathkal-beach-mangalore-tourism-entry-fee-timings-holidays-reviews-header.jpg',
      label: 'Surathkal Beach'
    },
    {
      src: 'https://www.revv.co.in/blogs/wp-content/uploads/2021/01/Chandragiri-Fort-768x576.jpeg',
      label: 'Chandragiri Fort'
    },
    {
      src: 'https://blogs.revv.co.in/blogs/wp-content/uploads/2021/01/Gokarna.jpg',
      label: 'Gokarna'
    },
    {
      src: 'https://media-cdn.tripadvisor.com/media/photo-s/02/c9/3d/be/manasa-amusement-water.jpg',
      label: 'Manasa Water-Park'
    },
    {
      src: 'https://mangaloretourism.in/images/tourist-places/pilikula-biological-park-mangalore/pilikula-biological-park-mangalore-india-tourism-history.jpg',
      label: 'Pilikula-Biological-Park'
    }
    // Add more photos here
  ];

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2>Photo Gallery</h2>
        </Col>
      </Row>
      <Row>
        {photos.map((photo, index) => (
          <Col md={4} key={index} className="mb-4">
            <Image src={photo.src} thumbnail style={{ objectFit: 'cover', height: '200px',width:'400px' }} />
            <p className="mt-2">{photo.label}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
