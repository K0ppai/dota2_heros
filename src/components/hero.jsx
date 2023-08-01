/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = (props) => {
  const hero = props;
  const navigate = useNavigate();

  const navigateToDetail = () => {
    navigate('/detail', { state: { hero } });
  };

  return (
    <li
      key={hero.id}
      className="flex flex-col border-2 border-x-slate-800 justify-center items-center py-2"
    >
      <button type="button" onClick={navigateToDetail} className="mt-3">
        <img
          src={`https://api.opendota.com${hero.img}`}
          alt={hero.localized_name}
          className="w-[150px]"
        />
        <div className="flex justify-start items-center my-1">
          <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
            alt="strength_icon"
            className="w-8"
          />
          <span className="text-white font-semibold text-lg ps-3">{hero.base_str}</span>
          <span className="text-sm ps-2 text-gray-400">+{hero.str_gain}</span>
        </div>
        <div className="flex justify-start items-center my-1">
          <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
            alt="agility_icon"
            className="w-8"
          />
          <span className="text-white font-semibold text-lg ps-3">{hero.base_agi}</span>
          <span className="text-sm ps-2 text-gray-400">+{hero.agi_gain}</span>
        </div>
        <div className="flex justify-start items-center my-1">
          <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
            alt="intelligence_icon"
            className="w-8"
          />
          <span className="text-white font-semibold text-lg ps-3">{hero.base_int}</span>
          <span className="text-sm ps-2 text-gray-400">+{hero.int_gain}</span>
        </div>
        <p className="text-center text-white text-2xl font-bold mt-2">{hero.localized_name}</p>
      </button>
    </li>
  );
};

export default Hero;
