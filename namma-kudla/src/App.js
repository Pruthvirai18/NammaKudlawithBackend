// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import { AuthProvider } from './context/AuthContext';
// // import ProtectedRoute from './components/ProtectedRoute';
// // import Navbar from './components/Navbar';
// // import Home from './components/Home';
// // import Blog from './components/Blog';
// // import Post from './components/Post';
// // import Gallery from './components/Gallery';
// // import Profile from './components/Profile';
// // import TravelTips from './components/TravelTips';
// // import Guide from './components/Guide';
// // import Blogger from './components/Blogger';
// // import Dashboard from './components/Dashboard';
// // import User from './components/User';
// // import Bloggerposts from './components/Bloggerposts';
// // import Login from './components/Login';
// // import Signup from './components/Signup';

// // function App() {
// //   return (
// //     <AuthProvider>
// //       <Router>
// //         <div>
// //           <Navbar />
// //           <Routes>
// //             <Route path="/login" element={<Login />} />
// //             <Route path="/signup" element={<Signup />} />
// //             <Route path="/" element={
// //               <ProtectedRoute>
// //                 <Home />
// //               </ProtectedRoute>
// //             } />
// //             <Route path="/blog" element={
// //               <ProtectedRoute>
// //                 <Blog />
// //               </ProtectedRoute>
// //             } />
// //             <Route path="/post/:id" element={
// //               <ProtectedRoute>
// //                 <Post />
// //               </ProtectedRoute>
// //             } />
// //             <Route path="/gallery" element={
// //               <ProtectedRoute>
// //                 <Gallery />
// //               </ProtectedRoute>
// //             } />
// //             <Route path="/profile/:username" element={
// //               <ProtectedRoute>
// //                 <Profile />
// //               </ProtectedRoute>
// //             } />
// //             <Route path="/travel-tips" element={
// //               <ProtectedRoute>
// //                 <TravelTips />
// //               </ProtectedRoute>
// //             } />
// //             <Route path="/guide" element={
// //               <ProtectedRoute>
// //                 <Guide />
// //               </ProtectedRoute>
// //             } />
// //             <Route path="/blogger" element={
// //               <ProtectedRoute>
// //                 <Blogger />
// //               </ProtectedRoute>
// //             } />
// //             <Route path="/bloggers/:id" element={
// //               <ProtectedRoute>
// //                 <Bloggerposts />
// //               </ProtectedRoute>
// //             } />
// //             <Route path="/dashboard" element={
// //               <ProtectedRoute>
// //                 <Dashboard />
// //               </ProtectedRoute>
// //             } />
// //             <Route path="/user" element={
// //               <ProtectedRoute>
// //                 <User />
// //               </ProtectedRoute>
// //             } />
// //           </Routes>
// //         </div>
// //       </Router>
// //     </AuthProvider>
// //   );
// // }

// // export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import ProtectedRoute from './components/ProtectedRoute';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Blog from './components/Blog';
// import Post from './components/Post';
// import Gallery from './components/Gallery';
// import Profile from './components/Profile';
// import TravelTips from './components/TravelTips';
// import Guide from './components/Guide';
// import Blogger from './components/Blogger';
// import Dashboard from './components/Dashboard';
// import User from './components/User';
// import Bloggerposts from './components/Bloggerposts';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Bookings from './components/Bookings'; // Import Bookings component

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <div>
//           <Navbar />
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/" element={
//               <ProtectedRoute>
//                 <Home />
//               </ProtectedRoute>
//             } />
//             <Route path="/blog" element={
//               <ProtectedRoute>
//                 <Blog />
//               </ProtectedRoute>
//             } />
//             <Route path="/post/:id" element={
//               <ProtectedRoute>
//                 <Post />
//               </ProtectedRoute>
//             } />
//             <Route path="/gallery" element={
//               <ProtectedRoute>
//                 <Gallery />
//               </ProtectedRoute>
//             } />
//             <Route path="/profile/:username" element={
//               <ProtectedRoute>
//                 <Profile />
//               </ProtectedRoute>
//             } />
//             <Route path="/travel-tips" element={
//               <ProtectedRoute>
//                 <TravelTips />
//               </ProtectedRoute>
//             } />
//             <Route path="/guide" element={
//               <ProtectedRoute>
//                 <Guide />
//               </ProtectedRoute>
//             } />
//             <Route path="/blogger" element={
//               <ProtectedRoute>
//                 <Blogger />
//               </ProtectedRoute>
//             } />
//             <Route path="/bloggers/:id" element={
//               <ProtectedRoute>
//                 <Bloggerposts />
//               </ProtectedRoute>
//             } />
//             <Route path="/dashboard" element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             } />
//             <Route path="/user" element={
//               <ProtectedRoute>
//                 <User />
//               </ProtectedRoute>
//             } />
//             <Route path="/bookings" element={
//               <ProtectedRoute>
//                 <Bookings />
//               </ProtectedRoute>
//             } />
//           </Routes>
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';
import Post from './components/Post';
import Gallery from './components/Gallery';
import Profile from './components/Profile';
import TravelTips from './components/TravelTips';
import Guide from './components/Guide';
import Blogger from './components/Blogger';
import Dashboard from './components/Dashboard';
import User from './components/User';
import Bloggerposts from './components/Bloggerposts';
import Login from './components/Login';
import Signup from './components/Signup';
import Bookings from './components/Bookings'; // Import the Bookings component

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path="/bookings" element={
              <ProtectedRoute>
                <Bookings />
              </ProtectedRoute>
            } />
            <Route path="/blog" element={
              <ProtectedRoute>
                <Blog />
              </ProtectedRoute>
            } />
            <Route path="/post/:id" element={
              <ProtectedRoute>
                <Post />
              </ProtectedRoute>
            } />
            <Route path="/gallery" element={
              <ProtectedRoute>
                <Gallery />
              </ProtectedRoute>
            } />
            <Route path="/profile/:username" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/travel-tips" element={
              <ProtectedRoute>
                <TravelTips />
              </ProtectedRoute>
            } />
            <Route path="/guide" element={
              <ProtectedRoute>
                <Guide />
              </ProtectedRoute>
            } />
            <Route path="/blogger" element={
              <ProtectedRoute>
                <Blogger />
              </ProtectedRoute>
            } />
            <Route path="/bloggers/:id" element={
              <ProtectedRoute>
                <Bloggerposts />
              </ProtectedRoute>
            } />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/user" element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

