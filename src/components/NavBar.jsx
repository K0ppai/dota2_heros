import { NavLink } from 'react-router-dom';
import { IoCaretBackSharp } from 'react-icons/io5';
import { SiSteam } from 'react-icons/si';

const NavBar = () => (
  <nav className=" z-2 py-2 flex items-center justify-around">
    <div className="flex items-center">
      <NavLink to="/">
        <IoCaretBackSharp className="text-gray-400 text-3xl" />
      </NavLink>
      <NavLink to="/">
        <img
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_symbol.png"
          alt="dota_logo"
          className="w-16 pl-5"
        />
      </NavLink>
    </div>
    <ul className="flex justify-around w-[50%]">
      <li className="text-xl text-white">
        <NavLink to="/">HEROS</NavLink>
      </li>
      <li className="text-xl text-white">
        <NavLink to="https://www.dota2.com/news">NEWS</NavLink>
      </li>
      <li className="text-xl text-white">
        <NavLink to="https://www.dota2.com/esports/summermajor23/watch/15438/312/game1details">
          ESPORTS
        </NavLink>
      </li>
    </ul>
    <NavLink to="https://store.steampowered.com/app/570/Dota_2/" className="w-[20%] border-2 border-x-slate-400 p-3 rounded-md">
      <div className="flex items-center justify-around">
        <SiSteam className="text-white text-2xl bg" />
        <span className="text-xl text-white">PLAY FOR FREE</span>
      </div>
    </NavLink>
  </nav>
);

export default NavBar;
