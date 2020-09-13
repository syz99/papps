import React from 'react';

import { useHistory } from 'react-router-dom';
import { SquareBtn } from 'components/trinogo-ui/';
import './home.css';

const Home = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/transport');
  };

  return (
    <div className="home">
      <div className="text-modal">
        <div>
          <SquareBtn text="Let's Go!" onClickHandler={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Home;
