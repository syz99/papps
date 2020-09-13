import React from 'react';

import { Card } from 'components/cards';

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
