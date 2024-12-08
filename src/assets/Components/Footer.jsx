import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
        {/* Website Information */}
        <div>
          <h1 className="text-2xl font-bold mb-3">Your Website Name</h1>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
          <p>Contact: support@example.com</p>
        </div>

        {/* Services Section */}
        <div>
          <h6 className="text-lg font-semibold mb-3">Services</h6>
          <ul>
            <li>
              <a className="text-gray-300 hover:text-white" href="#">
                Branding
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="#">
                Design
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="#">
                Marketing
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="#">
                Advertisement
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h6 className="text-lg font-semibold mb-3">Follow Us</h6>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-red-500"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 border-t border-gray-700 pt-5">
        <p>Designed & Developed by Tawhid Ahmed</p>
      </div>
    </footer>
  );
};

export default Footer;
