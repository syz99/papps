import React from 'react';

import { SquareBtn } from 'components/trinogo-ui/';
import { Card } from 'components/cards';

import city1 from 'images/city1.png';
import city1hover from 'images/city1.png';
import { subtitle } from './util';
import './leaderboard.css';

const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <div className="text-modal-leaderboard">
        <div className="leaderboard-header">Leaderboard</div>
        <br />
        <div className="leaderboard-subtitle">{subtitle}</div>
        <br />
        <br />
      </div>

      <div className="leaderboard-cards">
        <Card />
      </div>
    </div>
  );
};

export default Leaderboard;
