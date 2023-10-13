import React from 'react';

const Footer = ({date, click}) => {
  return (
    <div className="FooterApp">
      <div>Footer {date}</div>
      <button onClick={click}>Do it!</button>
    </div>
  );
};

export default Footer;
