import React from 'react';
    import Hero from './components/Hero';
    import Steps from './components/Steps';
    import Features from './components/Features';
    import Advanced from './components/Advanced';
    import Footer from './components/Footer';

    const App = () => {
      return (
        <div className="min-h-screen bg-white">
          <Hero />
          <Features />
          <Steps />
          <Advanced />
          <Footer />
        </div>
      );
    };

    export default App;
