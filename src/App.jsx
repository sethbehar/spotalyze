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

export default function App() {

  return (
    <Routes>
      <Route path="/" element={
          <div id="webcrumbs">
          <div className="bg-gradient-to-br from-green-200 to-green-800 min-h-screen">
            <div className="container mx-auto px-4 py-8">
              <Header />
              <Hero />
              <SpotifyWrappedAlt />
              <Features />
              <Pricing />
              <Footer />
              {/* <div>
                <input
                  type="file"
                  accept=".zip"
                  onChange={e => setZipFile(e.target.files[0] || null)}
                />
                {loading && <p>Loading…</p>}
                {!loading && entries.length > 0 && <DashboardLayout/>}
              </div> */}
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
