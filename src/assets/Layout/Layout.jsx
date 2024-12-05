import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex-grow py-10">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
