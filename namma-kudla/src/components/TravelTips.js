import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function TravelTips() {
  // Placeholder for travel tips data
  const tips = [
    {
      id: 1,
      title: 'Packing Essentials',
      description: 'Always pack light and bring only the essentials. Consider the weather and the activities planned to pack appropriately.',
      image: 'https://heymondo.com/blog/wp-content/uploads/2023/01/Travel-guide-to-packing.jpg'  // Add the image path if available
    },
    {
      id: 2,
      title: 'Travel Insurance',
      description: 'It’s crucial to have travel insurance to cover unexpected events such as medical emergencies, trip cancellations, or lost baggage.',
      image: 'https://5.imimg.com/data5/GU/WL/GLADMIN-8074891/travel-insurance-service-500x500.jpg'
    },
    {
      id: 3,
      title: 'Local Cuisine',
      description: 'Exploring local cuisine is a must. Try to eat where the locals do to experience authentic flavors and dishes.',
      image: 'https://mangaloreheritage.com/wp-content/uploads/2020/05/collage-food-1080x675.jpg'
    },
    {
      id: 4,
      title: 'Cultural Respect',
      description: 'Always be respectful of local customs and traditions. Learning a few phrases in the local language can go a long way in showing respect.',
      image: 'https://i0.wp.com/mangaloremerijaan.com/mmj/wp-content/uploads/2020/07/mangaloremerijaanofficial_105279092_202934300958189_2811179655605439120_n-1.jpg?fit=1080%2C720&ssl=1'
    }
    // Add more tips as needed
  ];

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2>Travel Tips & Information</h2>
          <p>Get the best travel tips to make your journey smoother and more enjoyable. Whether you're a seasoned traveler or a first-timer, these tips can help you prepare for your adventure.</p>
        </Col>
      </Row>
      <Row>
        {tips.map(tip => (
          <Col md={4} className="mb-4" key={tip.id}>
            <Card>
              {tip.image && <Card.Img variant="top" src={tip.image} />}
              <Card.Body>
                <Card.Title>{tip.title}</Card.Title>
                <Card.Text>{tip.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TravelTips;
