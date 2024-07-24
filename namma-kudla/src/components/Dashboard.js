import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Spinner } from 'react-bootstrap';

// Mock API functions
const fetchBookings = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      { id: 1, destination: 'Manasa Water park', date: '2024-08-15', status: 'Confirmed' },
      { id: 2, destination: 'Pilikula', date: '2024-10-10', status: 'Pending' },
      { id: 3, destination: 'Pabbas', date: '2024-09-01', status: 'Cancelled' },
    ]);
  }, 1000);
});

const fetchPreferences = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      travelInterests: ['Adventure', 'Cultural Tours', 'Beach Vacations'],
      notificationSettings: {
        email: true,
        appNotifications: false,
      },
      language: 'Kannada, Tulu',
      currency: 'Indian Rupee',
    });
  }, 1000);
});

function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [preferences, setPreferences] = useState({});
  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState(null); // To handle any errors

  useEffect(() => {
    const loadData = async () => {
      try {
        const [bookingsData, preferencesData] = await Promise.all([
          fetchBookings(),
          fetchPreferences(),
        ]);
        setBookings(bookingsData);
        setPreferences(preferencesData);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <Spinner animation="border" />; // Show spinner while loading
  if (error) return <p>{error}</p>; // Show error message if any

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2>User Dashboard</h2>
          <p>Welcome back! Here’s an overview of your activities and preferences.</p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Booking History</Card.Title>
              {bookings.length > 0 ? (
                <ListGroup variant="flush">
                  {bookings.map((booking) => (
                    <ListGroup.Item key={booking.id}>
                      <strong>{booking.destination}</strong> - {booking.date} ({booking.status})
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <p>No bookings found.</p>
              )}
              <Button variant="primary">View All Bookings</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Travel Preferences</Card.Title>
              <p><strong>Interests:</strong> {preferences.travelInterests ? preferences.travelInterests.join(', ') : 'Loading...'}</p>
              <p><strong>Notifications:</strong> Email {preferences.notificationSettings?.email ? 'Enabled' : 'Disabled'}</p>
              <p><strong>Language:</strong> {preferences.language}</p>
              <p><strong>Currency:</strong> {preferences.currency}</p>
              <Button variant="primary">Update Preferences</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Recent Activities</Card.Title>
              <p>Check out your recent activities and interactions.</p>
              {/* Add recent activities or other dynamic content here */}
              <Button variant="primary">View Recent Activities</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card, Button, ListGroup, Spinner } from 'react-bootstrap';
// import axios from 'axios'; // Import axios for making HTTP requests

// function Dashboard() {
//   const [bookings, setBookings] = useState([]);
//   const [preferences, setPreferences] = useState({});
//   const [loading, setLoading] = useState(true); // To manage loading state
//   const [error, setError] = useState(null); // To handle any errors

//   // Fetch user bookings from the backend
//   const fetchBookings = async () => {
//     try {
//       const response = await axios.get('/api/bookings'); // Replace with your actual API endpoint
//       setBookings(response.data);
//     } catch (err) {
//       setError('Failed to fetch bookings');
//     }
//   };

//   // Fetch user preferences from the backend
//   const fetchPreferences = async () => {
//     try {
//       const response = await axios.get('/api/preferences'); // Replace with your actual API endpoint
//       setPreferences(response.data);
//     } catch (err) {
//       setError('Failed to fetch preferences');
//     }
//   };

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         await Promise.all([
//           fetchBookings(),
//           fetchPreferences(),
//         ]);
//       } catch (err) {
//         setError('Failed to fetch data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadData();
//   }, []);

//   if (loading) return <Spinner animation="border" />; // Show spinner while loading
//   if (error) return <p>{error}</p>; // Show error message if any

//   return (
//     <Container>
//       <Row className="my-4">
//         <Col>
//           <h2>User Dashboard</h2>
//           <p>Welcome back! Here’s an overview of your activities and preferences.</p>
//         </Col>
//       </Row>

//       <Row className="mb-4">
//         <Col md={6}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Booking History</Card.Title>
//               {bookings.length > 0 ? (
//                 <ListGroup variant="flush">
//                   {bookings.map((booking) => (
//                     <ListGroup.Item key={booking.id}>
//                       <strong>{booking.destination}</strong> - {booking.date} ({booking.status})
//                     </ListGroup.Item>
//                   ))}
//                 </ListGroup>
//               ) : (
//                 <p>No bookings found.</p>
//               )}
//               <Button variant="primary">View All Bookings</Button>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col md={6}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Travel Preferences</Card.Title>
//               <p><strong>Interests:</strong> {preferences.travelInterests ? preferences.travelInterests.join(', ') : 'Loading...'}</p>
//               <p><strong>Notifications:</strong> Email {preferences.notificationSettings?.email ? 'Enabled' : 'Disabled'}</p>
//               <p><strong>Language:</strong> {preferences.language}</p>
//               <p><strong>Currency:</strong> {preferences.currency}</p>
//               <Button variant="primary">Update Preferences</Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="mb-4">
//         <Col>
//           <Card>
//             <Card.Body>
//               <Card.Title>Recent Activities</Card.Title>
//               <p>Check out your recent activities and interactions.</p>
//               {/* Add recent activities or other dynamic content here */}
//               <Button variant="primary">View Recent Activities</Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Dashboard;
