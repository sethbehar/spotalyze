import Header from './components/Header';
import Hero from './components/Hero';
import SpotifyWrappedAlt from './components/SpotifyWrappedAlt';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Payment from './components/Payment'
import DashboardLayout from './dashboard/DashboardLayout';
import { Routes, Route } from 'react-router-dom'
import Signup from './components/Signup';
import { useAuth, useUser } from '@clerk/clerk-react';
import { useEffect } from 'react';

export default function App() {

  const { user } = useUser()
  const { getToken } = useAuth()


  useEffect(() => {
    if (!user) return;

    (async () => {
      try {
        const token = await getToken();

        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('status ', res.status);
      } catch (err) {
        console.error('error in upsert effect', err);
      }
    })(); 
  }, [user, getToken]);

  return (
    <Routes>
      <Route path="/" element={
        <div id="webcrumbs">
          <div className="bg-white min-h-screen">
            <div className="container mx-auto px-4 py-8">
              <Header />
              <Hero />
              <SpotifyWrappedAlt />
              <Features />
              <Pricing />
              <Footer />
            </div>
          </div>
        </div>
      } />
      {/* ROUTES ASIDE FROM MAIN ROUTE*/}
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
      <Route path="/payment" element={<Payment />} />

    </Routes>
  );
}
