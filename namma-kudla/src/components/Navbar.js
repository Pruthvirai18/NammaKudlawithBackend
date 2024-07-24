// // src/components/Navbar.js
// import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// function CustomNavbar() {
//   // Handle logout functionality (for example purposes)
//   const handleLogout = () => {
//     // Clear authentication state or token
//     // Example: localStorage.removeItem('authToken');
//     window.location.href = '/login'; // Redirect to login page
//   };

//   // Simulate authentication state (for demonstration purposes)
//   const isAuthenticated = false; // Change to true if user is authenticated

//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Navbar.Brand as={Link} to="/">Namma Kudla</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="me-auto">
//           <Nav.Link as={Link} to="/">Home</Nav.Link>
//           {isAuthenticated && (
//             <>
//               <Nav.Link as={Link} to="/user">User</Nav.Link>
//               <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
//             </>
//           )}
//           <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
//           <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
//           <Nav.Link as={Link} to="/guide">Guide</Nav.Link>
//           <Nav.Link as={Link} to="/blogger">Blogger</Nav.Link>
//           <Nav.Link as={Link} to="/travel-tips">Travel Tips</Nav.Link>
//         </Nav>
//         <Nav>
//           {isAuthenticated ? (
//             <Nav.Link as={Link} to="/" onClick={handleLogout}>Logout</Nav.Link>
//           ) : (
//             <>
//               <Nav.Link as={Link} to="/login">Login</Nav.Link>
//               <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
//             </>
//           )}
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default CustomNavbar;
// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Namma Kudla</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link as={Link} to="/user">User</Nav.Link>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
          <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
          <Nav.Link as={Link} to="/guide">Guide</Nav.Link>
          <Nav.Link as={Link} to="/blogger">Blogger</Nav.Link>
          <Nav.Link as={Link} to="/travel-tips">Travel Tips</Nav.Link>
          <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
