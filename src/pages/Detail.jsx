import React from 'react';
import { useLocation } from 'react-router-dom';

const Detail = () => {
  const location = useLocation();
  const { hero } = location.state;

  return (
    <div>
      <p>{hero.localized_name}</p>
    </div>
  );
};

export default Detail;
