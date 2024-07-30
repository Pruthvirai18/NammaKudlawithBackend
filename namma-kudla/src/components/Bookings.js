// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// const Bookings = () => {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await axios.get('http://localhost:5002/api/bookings');
//         setBookings(response.data);
//       } catch (error) {
//         console.error('Error fetching bookings:', error);
//       }
//     };

//     fetchBookings();
//   }, []);

//   return (
//     <div>
//       <h1>Bookings</h1>
//       <ul>
//         {bookings.map(booking => (
//           <li key={booking._id}>
//             {booking.destination} - {booking.date} - {booking.status}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Bookings;
// src/components/Bookings.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5004/api/bookings');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h1>Bookings</h1>
      <ul>
        {bookings.map(booking => (
          <li key={booking._id}>
            {booking.destination} - {booking.date} - {booking.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookings;
