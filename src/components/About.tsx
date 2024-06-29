import React from 'react';
import style from '../styles/About.module.css';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dark text-white">
      <main className="flex-grow">
        <section className="bg-secondary text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">About evolve Tech</h2>
            <p className="text-lg mb-8">
              Revolve Tech is dedicated to promoting eco-friendly transportation options. Our mission is to incentivize users to reduce their carbon footprint by offering rewards for using public transportation, biking, and walking.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray text-secondary">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Vision</h2>
            <p className="text-lg mb-8">
              We envision a world where sustainable transportation is the norm. By encouraging more people to choose eco-friendly modes of transportation, we aim to make a significant impact on reducing global carbon emissions and improving urban air quality.
            </p>
          </div>
        </section>

        <section className="bg-dark text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Team</h2>
            <div className="flex flex-wrap justify-center">
              <div className="w-full sm:w-1/3 p-4">
                <div className="bg-secondary rounded-lg shadow-lg p-6">
                  <h3 className="text-2xl font-bold mb-2">John Doe</h3>
                  <p>CEO & Founder</p>
                </div>
              </div>
              <div className="w-full sm:w-1/3 p-4">
                <div className="bg-secondary rounded-lg shadow-lg p-6">
                  <h3 className="text-2xl font-bold mb-2">Jane Smith</h3>
                  <p>Chief Technology Officer</p>
                </div>
              </div>
              <div className="w-full sm:w-1/3 p-4">
                <div className="bg-secondary rounded-lg shadow-lg p-6">
                  <h3 className="text-2xl font-bold mb-2">Alice Johnson</h3>
                  <p>Head of Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto text-center">
          <p className="mb-4">Contact us: contact@revolvetech.com</p>
          <p>&copy; 2024 Revolve Tech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
