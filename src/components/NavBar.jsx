import { NavLink } from 'react-router-dom';
import { IoCaretBackSharp } from 'react-icons/io5';
import logo from '../assets/dota2_logo.png';

const NavBar = () => (
  <nav className="flex bg-slate-700 items-center">
    <div className="flex items-center">
      <NavLink to="/">
        <IoCaretBackSharp className="text-gray-400" />
      </NavLink>
      <img src={logo} alt="" className="w-[10%]" />
    </div>
    <ul>
      <li>
        <NavLink to="/">Heros</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
