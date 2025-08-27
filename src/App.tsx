import React from 'react';
    import Header from '@/components/layout/Header';
    import Hero from '@/components/sections/Hero';
    import Categories from '@/components/sections/Categories';
    import FlagshipSuits from '@/components/sections/FlagshipSuits';
    import TrustElements from '@/components/sections/TrustElements';
    import Footer from '@/components/layout/Footer'; // Import the Footer component
    import './App.css';

    function App() {
      return (
        <div className="min-h-screen bg-bandhvi-dark-brown text-bandhvi-off-white">
          <Header />
          <main>
            <Hero />
            <Categories />
            <FlagshipSuits />
            <TrustElements />
          </main>
          <Footer /> {/* Add the Footer component here */}
        </div>
      );
    }

    export default App;
