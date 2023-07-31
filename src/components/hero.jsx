import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = (props) => {
  const hero = props;
  const navigate = useNavigate();
  const replaceImagesWithVideos = (imgUrl) => {
    const heroName = imgUrl.split('/').pop().replace('.png?', '');
    return `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${heroName}.png`;
  };

  const navigateToDetail = () => {
    navigate('/detail', { state: { hero } });
  };

  return (
    <li key={hero.id}>
      <button
        type="button"
        onClick={navigateToDetail}
        className="flex border border-orange-500 justify-center"
      >
        <img src={`https://api.opendota.com${hero.img}`} alt={hero.name} className="w-[30%]" />
        <video
          poster={replaceImagesWithVideos(hero.img)}
          alt={hero.name}
          className="w-[20%]"
          autoPlay
          preload="auto"
          loop
          playsInline
        >
          <track kind="captions" />
          <source type="video/webm" src={replaceImagesWithVideos(hero.img)} />
          <img src={replaceImagesWithVideos(hero.img)} alt="" />
        </video>
      </button>
    </li>
  );
};

export default Hero;
