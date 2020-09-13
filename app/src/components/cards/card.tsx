import React from 'react';

// import { SquareBtn } from 'components/trinogo-ui/';
import { useHistory } from 'react-router-dom';

import city1 from 'images/city1.png';
import city1hover from 'images/city1hover.png';
import city2 from 'images/city2.png';
import city2hover from 'images/city2hover.png';
import city3 from 'images/city3.png';
import city3hover from 'images/city3hover.png';
import './style.css';

const Card = () => {
  const history = useHistory();

  function handleClick() {
    history.push('/media');
  }

  return (
    <div className="container">
      <div className="column">
        <img
          id="img"
          src={city1}
          onMouseOver={(e) => (e.currentTarget.src = city1hover)}
          onMouseOut={(e) => (e.currentTarget.src = city1)}
          onClick={handleClick}
        />
      </div>
      <div className="column">
        <img
          id="img"
          src={city2}
          onMouseOver={(e) => (e.currentTarget.src = city2hover)}
          onMouseOut={(e) => (e.currentTarget.src = city2)}
          onClick={(e) =>
            (window.location.href =
              'https://repentantimpressionabledeclaration.juliaturner.repl.co/')
          }
        />
      </div>
      <div className="column">
        <img
          id="img"
          src={city3}
          onMouseOver={(e) => (e.currentTarget.src = city3hover)}
          onMouseOut={(e) => (e.currentTarget.src = city3)}
          onClick={(e) =>
            (window.location.href =
              'https://repentantimpressionabledeclaration.juliaturner.repl.co/')
          }
        />
      </div>
    </div>
  );
};

export default Card;
