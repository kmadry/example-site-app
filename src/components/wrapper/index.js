import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Wrapper = () => {
  return (
    <div>
      Wrapper
      <Outlet />
    </div>
  );
};

export default Wrapper;
