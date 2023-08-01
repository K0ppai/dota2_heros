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
    <div className="bg-detail-bg bg-cover bg-no-repeat min-h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
