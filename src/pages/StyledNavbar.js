import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return(
    <nav className = 'navbar'>
      <NavLink to = '/'> Home </NavLink>
      <NavLink to = '/login'> Login </NavLink>
      </nav>
      );
};
export default Navbar;