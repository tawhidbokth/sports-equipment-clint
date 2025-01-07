import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
        <div>
          <img
            className="w-32 rounded-full"
            src="https://i.ibb.co.com/2n7Q1kS/sports-logo-1090712-116.jpg"
            alt=""
          />
          <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
          <p>Contact: support@example.com</p>
        </div>
        <div>
          <h6 className="text-lg font-semibold mb-3">Quike Link</h6>
          <ul>
            <Link to={'/'}>
              <li>
                <a className="text-gray-300 hover:text-white" href="#">
                  Home
                </a>
              </li>
            </Link>
            <Link to={'/allequipment'}>
              <li>
                <a className="text-gray-300 hover:text-white" href="#">
                  All Equipment
                </a>
              </li>
            </Link>

            <Link to={'/equipment'}>
              <li>
                <a className="text-gray-300 hover:text-white" href="#">
                  Add Equipment
                </a>
              </li>
            </Link>

            <Link to={'/login'}>
              <li>
                <a className="text-gray-300 hover:text-white" href="#">
                  Login
                </a>
              </li>
            </Link>
          </ul>
        </div>

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
