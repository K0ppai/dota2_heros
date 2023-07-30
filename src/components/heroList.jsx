import React from 'react';
import { useSelector } from 'react-redux';

const HerosList = () => {
  const heros = useSelector((state) => state.heros.heros);
  console.log(heros);

  return (
    <>
      <h1>Heros List</h1>
      <ul>
        {heros.map((hero) => (
          <li key={hero.id}>
            <img src={`https://api.opendota.com${hero.img}`} alt={hero.name} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default HerosList;
