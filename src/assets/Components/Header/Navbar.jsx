import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../../Pages/Provider/Provider';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success('Sign Out Successful!', {
          position: 'top-center',
          autoClose: 2000,
        });

        setTimeout(() => {
          navigate('/');
        }, 2000);
      })
      .catch(error => {
        toast.error(`Error: ${error.message}`, {
          position: 'top-center',
          autoClose: 2000,
        });
      });
  };

  const closeMenu = () => setIsMenuOpen(false);

  const listnav = (
    <>
      <li onClick={closeMenu}>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li onClick={closeMenu}>
        <NavLink to={'/allequipment'}>Sports Equipment</NavLink>
      </li>
      {user && (
        <>
          <li onClick={closeMenu}>
            <NavLink to={'/equipment'}>Add Equipment</NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to={'/myequipment'}>My Equipment</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 lg:w-[1400px] lg:mx-auto">
      <div className="navbar-start flex items-center">
        <a className="btn btn-ghost p-0">
          <p>sports equipment</p>
        </a>

        <button
          className="lg:hidden btn btn-ghost ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{listnav}</ul>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden navbar-end w-full bg-base-100 shadow-lg">
          <ul className="menu w-full p-4">{listnav}</ul>
        </div>
      )}

      <div className="navbar-end flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div data-tooltip-id="my-tooltip-1" className="w-10 rounded-full">
                <img
                  src={user.photoURL || '/default-avatar.png'}
                  alt="User Profile"
                />
              </div>
            </div>
            <button onClick={handleSignOut} className="btn btn-sm">
              Sign Out
            </button>
          </div>
        ) : (
          <Link to={'/login'} className="btn btn-sm">
            Login
          </Link>
        )}
      </div>
      <ToastContainer />
      {user && user.displayName && (
        <ReactTooltip
          id="my-tooltip-1"
          place="bottom"
          content={user.displayName}
        />
      )}
    </div>
  );
};

export default Navbar;
