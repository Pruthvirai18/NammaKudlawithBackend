import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Welcome to Namma Kudla</h1>
          <p>Discover amazing travel stories, tips, and destinations.</p>
        </Col>
      </Row>
      
      {/* Carousel for displaying pictures */}
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media-cdn.tripadvisor.com/media/photo-s/11/a6/e0/66/panambur-beach.jpg"
                alt="Panambur Beach"
              />
              <Carousel.Caption>
                <h3>Panambur Beach</h3>
                <p>Enjoy the stunning sunsets and vibrant festivals at Panambur Beach.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://2.bp.blogspot.com/-4Xo5YEErEu4/Ti55gPvRh7I/AAAAAAAAAa4/32-shELZEk4/s1600/Picture+008.jpg"
                alt="Kudroli Gokarnath Temple"
              />
              <Carousel.Caption>
                <h3>Kudroli Gokarnath Temple</h3>
                <p>Explore the serene ambience and cultural festivities at Kudroli Gokarnath Temple.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://mangaloreheritage.com/wp-content/uploads/2020/06/bunt-traditions-collage-980x735.jpg"
                alt="Mangalore Culture"
              />
              <Carousel.Caption>
                <h3>Mangalore Culture</h3>
                <p>Discover Mangalore's rich cultural heritage through its vibrant festivals and culinary delights.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

    </Container>
  );
}

export default Home;
