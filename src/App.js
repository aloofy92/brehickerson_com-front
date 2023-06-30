import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Search from './components/Search';
import LandlordReviews from './components/LandlordReviews';
import UserDashboard from './components/UserDashboards';
import UserProfile from './components/UserProfile';
import ContactUs from './components/ContactUs';
import Blog from './components/Blogs';
import LandlordListings from './components/LandlordListings';

function App() {
  const [reviews, setReviews] = useState([]);

  const handleAddReview = (review) => {
    setReviews([...reviews, review]);
  };

  useEffect(() => {
console.log('useEffect')
console.log(reviews)
  },[reviews]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/dashboard',
          element: <UserDashboard />
        },
        {
          path: '/user-profile',
          element: <UserProfile />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/about-us',
          element: <AboutUs />
        },
        {
          path: '/search',
          element: <Search />
        },
        {
          path: '/landlord-listings',
          element: <LandlordListings reviews={reviews} landlordId={useParams().landlordId} />
        },
        {
          path: '/reviews',
          element: <LandlordReviews reviews={reviews} setReviews={setReviews} />
        },
        {
          path: '/contact-us',
          element: <ContactUs />
        },
        {
          path: '/blogs',
          element: <Blog />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/search" element={<Search />} />
          <Route path="/reviews" element={<LandlordReviews reviews={reviews} setReviews={setReviews} />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/landlord-listings/" element={<LandlordListings reviews={reviews} landlordId={useParams().landlordId} />} />
        </Route>
      </Routes>
    </RouterProvider>
  );
}

export default App;
//element: <LandlordListings reviews={reviews} landlordId={useParams().landlordId} />
// <Route path="/landlord-landlordId/*" element={<LandlordListings reviews={reviews} landlordId={useParams().landlordId} />} />