import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SpotifyWrappedAlt from './components/SpotifyWrappedAlt';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div id="webcrumbs">
      <div className="bg-gradient-to-br from-green-50 to-gray-100 min-h-screen">
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
  );
}
