import React from 'react';
import { motion } from 'motion/react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewsletterSection = () => {
  const handleSubscribe = event => {
    event.preventDefault(); // Prevent page reload
    toast.success('Subscribed successfully!', {
      position: 'top-center',
      autoClose: 3000,
    });
  };

  return (
    <section className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-blue-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Subscribe to Our Newsletter
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-600 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Stay updated with the latest news and exclusive offers.
        </motion.p>

        <motion.form
          onSubmit={handleSubscribe}
          className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <input
            type="email"
            className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Subscribe
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default NewsletterSection;
