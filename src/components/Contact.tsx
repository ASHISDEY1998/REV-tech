import React from 'react';
import style from '../styles/Contact.module.css';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark text-white">
      <div className={`container mx-auto p-8 bg-secondary rounded-lg shadow-lg ${style.formContainer}`}>
        <h2 className="text-4xl font-bold mb-8 text-center">Join Our Waiting List</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
            <input type="text" id="name" name="name" className="p-2 rounded w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
            <input type="email" id="email" name="email" className="p-2 rounded w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
            <textarea id="message" name="message" rows={4} className="p-2 rounded w-full"></textarea>
          </div>
          <button type="submit" className="bg-primary text-white py-2 px-4 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
