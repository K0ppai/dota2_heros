// import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HerosList from './components/heroList';
import { fetchHeros } from './redux/heroStats/heroStatsSlicer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHeros());
  }, [dispatch]);
  return (
    <div>
      <h1>App</h1>
      <HerosList />
    </div>
  );
}

export default App;
