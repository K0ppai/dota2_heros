import React from 'react';
import { useSelector } from 'react-redux';
import Hero from './Hero';

const HerosList = () => {
  const heros = useSelector((state) => state.heros.heros);

  return (
    <>
      <ul className="grid grid-cols-3 gap-2 bg-slate-600">
        {heros.map((hero) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Hero key={hero.id} {...hero} />
        ))}
      </ul>
    </>
  );
};

export default HerosList;
