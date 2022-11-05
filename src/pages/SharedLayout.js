import {Link, Outlet} from 'react-router-dom';
import StyledNavbar from './pages/StyledNavbar';

const Home = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  );
};
export default Home;