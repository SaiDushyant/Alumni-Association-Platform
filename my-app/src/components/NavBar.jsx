import { NavLink } from 'react-router-dom';
import './styles.css'; // Ensure this path is correct

const NavBar = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-gray-50">
      <a
        href="#"
        className="float-left border-r border-gray-200 px-4 py-3 text-3xl text-gray-800 transition-colors duration-500 hover:bg-gray-800 hover:text-gray-50"
        style={{ fontFamily: '"Oswald", sans-serif' }}
      >
        <span className="text-orange-500">N</span>ex
        <span className="text-orange-500">G</span>en
      </a>
      <nav className="float-left">
        <ul className="m-0 flex list-none p-4">
          <li className="inline px-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `border-b-3 pb-3 text-xl uppercase transition-colors duration-200 ${isActive ? 'active-link' : 'border-transparent text-gray-800'} hover:border-gray-800 hover:text-gray-800`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="inline px-2">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `border-b-3 pb-3 text-xl uppercase transition-colors duration-200 ${isActive ? 'active-link' : 'border-transparent text-gray-800'} hover:border-gray-800 hover:text-gray-800`
              }
            >
              Services
            </NavLink>
          </li>
          <li className="inline px-2">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `border-b-3 pb-3 text-xl uppercase transition-colors duration-200 ${isActive ? 'active-link' : 'border-transparent text-gray-800'} hover:border-gray-800 hover:text-gray-800`
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="inline px-2">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `border-b-3 pb-3 text-xl uppercase transition-colors duration-200 ${isActive ? 'active-link' : 'border-transparent text-gray-800'} hover:border-gray-800 hover:text-gray-800`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className="float-right mr-2 mt-2 flex justify-center rounded bg-orange-500 p-2">
        Login<span className="material-symbols-outlined">login</span>
      </button>
    </header>
  );
};

export default NavBar;
