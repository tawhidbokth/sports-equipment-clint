import { useLoaderData } from 'react-router-dom';
import Category from './Category';
import Banner from './Header/Banner';
import Product from './Product';

const Home = () => {
  const equipment = useLoaderData();
  return (
    <div>
      <Banner></Banner>

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/5">
          <Category />
        </div>

        <div className="w-full md:w-4/5">
          <Product equipment={equipment}></Product>
        </div>
      </div>
    </div>
  );
};

export default Home;
