import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchHeros } from './redux/heroStats/heroStatsSlicer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHeros());
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
