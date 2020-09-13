import React from 'react';

import { SquareBtn } from 'components/trinogo-ui/';
import './transport.css';

const Transport = () => {
  const handleClick = () => {
    window.location.href =
      'https://repentantimpressionabledeclaration.juliaturner.repl.co/';
  };

  return (
    <div className="transport">
      <div className="transport-text-modal">
        <div>
          Where in the world<br></br>do you want to go?
        </div>
        <div>
          <SquareBtn text="Pick A Place" onClickHandler={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Transport;
