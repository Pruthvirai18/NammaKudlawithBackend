// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Form, Button, Image, Toast } from 'react-bootstrap';
// import { useAuth } from '../context/AuthContext';

// function User() {
//   const { user } = useAuth(); // Get user info from context

//   // State to manage user inputs and toast visibility
//   const [userData, setUserData] = useState({
//     name: user?.name || '',
//     email: user?.email || '',
//     address: 'Adyar, Mangalore',
//     profilePic: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png',
//     destination: '',
//     foodPreference: '',
//     travelMode: '',
//   });
//   const [showToast, setShowToast] = useState(false); // State for controlling toast visibility

//   // Handle form inputs
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Process the user data, e.g., save to a database or update profile
//     console.log('User Preferences:', userData);
//     // Show toast notification
//     setShowToast(true);
//     // Reset form fields (optional)
//     setUserData({
//       ...userData,
//       destination: '',
//       foodPreference: '',
//       travelMode: '',
//     });
//   };

//   useEffect(() => {
//     // Update userData with user info from context when component mounts
//     setUserData((prevData) => ({
//       ...prevData,
//       name: user?.name || '',
//       email: user?.email || '',
//     }));
//   }, [user]);

//   return (
//     <Container>
//       <Row className="my-4">
//         <Col className="text-center">
//           <Image
//             src={userData.profilePic}
//             roundedCircle
//             style={{ width: '150px', height: '150px', objectFit: 'cover' }}
//           />
//           <h2 className="mt-3">{userData.name}</h2>
//           <p>{userData.email}</p>
//           <p>{userData.address}</p>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <h2>Travel Preferences</h2>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formDestination" className="mb-3">
//               <Form.Label>Preferred Destination</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your preferred destination"
//                 name="destination"
//                 value={userData.destination}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formFoodPreference" className="mb-3">
//               <Form.Label>Food Preference</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your food preference"
//                 name="foodPreference"
//                 value={userData.foodPreference}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formTravelMode" className="mb-3">
//               <Form.Label>Preferred Mode of Travel</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your preferred mode of travel (e.g., Car, Bike, Bus)"
//                 name="travelMode"
//                 value={userData.travelMode}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//               Save Preferences
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//       {/* Toast notification for preference saved */}
//       <Toast
//         show={showToast}
//         onClose={() => setShowToast(false)}
//         style={{
//           position: 'absolute',
//           top: 20,
//           right: 20,
//           minWidth: 200,
//         }}
//         delay={3000} // Auto close after 3 seconds
//         autohide
//       >
//         <Toast.Body>Preferences Saved!</Toast.Body>
//       </Toast>
//     </Container>
//   );
// }

// export default User;
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Image, Toast } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

function User() {
  const { user } = useAuth();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    address: '',
    profilePic: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png',
    destination: '',
    foodPreference: '',
    travelMode: '',
  });
  const [showToast, setShowToast] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      setUserData({
        ...userData,
        name: user.username,
        email: user.email,
        address: user.address,
      });
    }
  }, [user, userData]); // Add userData to the dependency array

  // Handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the user data, e.g., save to a database or update profile
    console.log('User Preferences:', userData);
    // Show toast notification
    setShowToast(true);
    // Reset form fields (optional)
    setUserData({
      ...userData,
      destination: '',
      foodPreference: '',
      travelMode: '',
    });
    setIsEditing(false);
  };

  // Toggle editing mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Container>
      <Row className="my-4">
        <Col className="text-center">
          <Image
            src={userData.profilePic}
            roundedCircle
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <h2 className="mt-3">{userData.name}</h2>
          <p>{userData.email}</p>
          <p>{userData.address}</p>
          <Button variant="secondary" onClick={toggleEdit}>
            {isEditing ? 'Cancel' : 'Edit'}
          </Button>
        </Col>
      </Row>
      {isEditing && (
        <Row>
          <Col>
            <h2>Travel Preferences</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formDestination" className="mb-3">
                <Form.Label>Preferred Destination</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your preferred destination"
                  name="destination"
                  value={userData.destination}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formFoodPreference" className="mb-3">
                <Form.Label>Food Preference</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your food preference"
                  name="foodPreference"
                  value={userData.foodPreference}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formTravelMode" className="mb-3">
                <Form.Label>Preferred Mode of Travel</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your preferred mode of travel (e.g., Car, Bike, Bus)"
                  name="travelMode"
                  value={userData.travelMode}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Save Preferences
              </Button>
            </Form>
          </Col>
        </Row>
      )}
      {/* Toast notification for preference saved */}
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          minWidth: 200,
        }}
        delay={3000} // Auto close after 3 seconds
        autohide
      >
        <Toast.Body>Preferences Saved!</Toast.Body>
      </Toast>
    </Container>
  );
}

export default User;
