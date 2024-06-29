import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dark text-white">
      <main className="flex-grow">
        <section className="bg-secondary text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to REKER WORLD</h2>
            <p className="text-lg mb-8">Earn coupons by using eco-friendly modes of transport like buses, metro, or walking to save the environment.</p>
            <a href="#download" className="bg-primary text-white px-6 py-3 rounded-full">Download the App</a>
          </div>
        </section>

        <section id="features" className="py-20 bg-gray text-secondary">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Features</h2>
            <div className="flex flex-wrap justify-center">
              <div className="w-full sm:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-2xl font-bold mb-2 text-secondary">Track Your Commute</h3>
                  <p>Automatically track your eco-friendly commutes.</p>
                </div>
              </div>
              <div className="w-full sm:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-2xl font-bold mb-2 text-secondary">Earn Rewards</h3>
                  <p>Get coupons and discounts for sustainable choices.</p>
                </div>
              </div>
              <div className="w-full sm:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-2xl font-bold mb-2 text-secondary">Support the Planet</h3>
                  <p>Contribute to reducing carbon emissions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="download" className="bg-dark text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Download the App</h2>
            <p className="text-lg mb-8">Available on iOS and Android</p>
            <a href="#" className="bg-primary text-white px-6 py-3 rounded-full mx-2">App Store</a>
            <a href="#" className="bg-primary text-white px-6 py-3 rounded-full mx-2">Google Play</a>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-secondary text-white py-8">
        <div className="container mx-auto text-center">
          <p className="mb-4">Contact us: contact@reker.world</p>
          <p>&copy; 2024 Evolve Technologies pvt ltd All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
