import React from 'react';
import { Link } from 'react-router-dom';

const Site1 = () => {
  return (
    <div>
      Site1
      <Link to="/Site2">To site2</Link>
    </div>
  );
};

export default Site1;
