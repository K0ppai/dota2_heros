/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useLocation } from 'react-router-dom';

const Detail = () => {
  const location = useLocation();
  const { hero } = location.state;
  const { roles } = hero;

  const generatePosterlink = (imgUrl) => {
    const heroName = imgUrl.split('/').pop().replace('.png?', '');
    return `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${heroName}.png`;
  };
  const generateSourcelink = (imgUrl) => {
    const heroName = imgUrl.split('/').pop().replace('.png?', '');
    return `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${heroName}.webm`;
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:flex justify-around h-[100%] text-gray-200">
      <video
        poster={generatePosterlink(hero.img)}
        alt={hero.name}
        className="w-[60%] md:w-[45%]"
        autoPlay
        preload="auto"
        loop
        playsInline
      >
        <track kind="captions" />
        <source type="video/webm" src={generateSourcelink(hero.img)} />
        <img src={generatePosterlink(hero.img)} alt={hero.localized_name} />
      </video>
      <div className="w-[100%] md:w-[40%]">
        <div className="p-0 w-[100%]">
          <h1 className="col-span-3 text-center font-bold text-2xl">ROLES</h1>
          {roles.map((role, index) => (
            <div
              key={role}
              className={`py-2  ${
                index % 2 === 0 ? 'bg-detail-bg bg-center' : 'bg-detail-bg bg-cover bg-center'
              }`}
            >
              <span className="pl-4">{role}</span>
            </div>
          ))}
        </div>
        <div className="mt-3">
          <h1 className="col-span-3 text-center font-bold text-2xl">STATS</h1>
          <div>
            <h1 className="text-center my-2">ATTACK</h1>
            <div className="flex justify-around bg-detail-bg">
              <img
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png"
                alt="attack_icon"
              />
              <span>
                {hero.base_attack_min}-{hero.base_attack_max}
              </span>
            </div>
            <div className="flex justify-around bg-detail-bg">
              <img
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png"
                alt="attack_time_icon"
              />
              <span>{hero.attack_rate}</span>
            </div>
            <div className="flex justify-around bg-detail-bg">
              <img
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png"
                alt="attack_range_icon"
              />
              <span>{hero.attack_range}</span>
            </div>
            <div className="flex justify-around bg-detail-bg">
              <img
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_projectile_speed.png"
                alt="projectile_speed_icon"
              />
              <span>{hero.projectile_speed}</span>
            </div>
          </div>
          <div>
            <h1 className="text-center my-2">DEFENSE</h1>
            <div className="flex justify-around bg-detail-bg">
              <img
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png"
                alt="icon_armor"
              />
              <span>{hero.base_armor}</span>
            </div>
            <div className="flex justify-around bg-detail-bg">
              <img
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_magic_resist.png"
                alt="icon_magic_resist"
              />
              <span>{hero.base_mr}</span>
            </div>
          </div>
          <div>
            <h1 className="text-center my-2">MOBILITY</h1>
            <div className="flex justify-around bg-detail-bg">
              <img
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png"
                alt="icon_movement_speed"
              />
              <span>{hero.move_speed}</span>
            </div>
            <div className="flex justify-around bg-detail-bg">
              <img
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_vision.png"
                alt="icon_vision"
              />
              <span>
                {hero.day_vision}/{hero.night_vision}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
