import { useState } from 'react';
import { useSelector } from 'react-redux';
import Hero from '../hero';

const HerosList = () => {
  let heros = useSelector((state) => state.heros.heros);
  const status = useSelector((state) => state.heros.status);
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
      <form className="flex justify-center bg-transparent pb-4">
        <input
          type="text"
          placeholder="Search hero by name..."
          className="bg-transparent border-2 border-gray-300 rounded-lg px-4 py-2 text-gray-400 focus:outline-none focus:border-orange-500 w-[70%]"
          value={inputValue}
          onChange={handleChange}
        />
      </form>
      <ul
        className={`${
          heros.length === 0 ? 'h-[100vh]' : 'grid grid-cols-2 gap-0 md:grid-cols-5 md:gap-2'
        }`}
        data-testid="heros-list"
      >
        {status === 'loading' ? (
          <p className="text-7xl text-slate-400 text-center mt-6">Loading...</p>
        ) : (
          <>
            {heros.length === 0 ? (
              <p className="text-7xl text-slate-400 text-center mt-6">Hero Not Found</p>
            ) : (
              heros.map((hero) => (
                /* eslint-disable-next-line react/jsx-props-no-spreading */
                <Hero key={hero.id} {...hero} data-testid={`hero-${hero.localized_name}`} />
              ))
            )}
          </>
        )}
      </ul>
    </div>
  );
};

export default HerosList;
