import React from 'react';

import { SquareBtn } from 'components/trinogo-ui/';
import './home.css';

const Home = () => {
  const handleClick = () => {
    window.location.href =
      'https://repentantimpressionabledeclaration.juliaturner.repl.co/';
  };

  return (
    <div className="home">
      <div className="text-modal">
        <div>
          <SquareBtn text="Learn More" onClickHandler={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Home;
