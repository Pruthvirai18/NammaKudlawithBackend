import React from 'react';
import { Image } from 'react-bootstrap';

function Profile() {
  return (
    <div>
      <h2>User Profile</h2>
      <Image src="path_to_image.jpg" alt="Profile Image" fluid />
      {/* Additional profile information */}
    </div>
  );
}

export default Profile;
