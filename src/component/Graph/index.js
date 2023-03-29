import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header';


import './Graph.styles.scss';

function Graph() {
  return (
    <div className="Graph">
          <Header />
          <div>
            <h1>Click on above links to see charts</h1>
          </div>
    </div>
  );
}

export default Graph;