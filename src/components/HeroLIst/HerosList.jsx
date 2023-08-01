/* eslint-disable react/jsx-props-no-spreading */

import { useState } from 'react';
import { useSelector } from 'react-redux';
import Hero from '../Hero';

const HerosList = () => {
  let heros = useSelector((state) => state.heros.heros);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    const searchInput = e.target.value.toLowerCase();
    setInputValue(searchInput);
  };

  if (inputValue.length > 0) {
    heros = heros.filter((hero) => hero.localized_name.toLowerCase().match(inputValue));
  }

  return (
    <div>
      <form className="flex justify-center pt-4 bg-transparent pb-4">
        <input
          type="text"
          placeholder="Search hero by name..."
          className="bg-transparent border-2 border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:border-orange-500 w-[50%]"
          value={inputValue}
          onChange={handleChange}
        />
      </form>
      <ul
        className={`${heros.length === 0 ? 'h-[100vh]' : 'grid grid-cols-2 md:grid-cols-5 gap-2'}`}
        data-testid="heros-list"
      >
        {heros.length === 0 ? (
          <p className="text-7xl text-slate-400 text-center mt-6">Hero Not Found</p>
        ) : (
          heros.map((hero) => (
            <Hero key={hero.id} {...hero} data-testid={`hero-${hero.localized_name}`} />
          ))
        )}
      </ul>
    </div>
  );
};

export default HerosList;
