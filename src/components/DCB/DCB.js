import React from 'react';
import './DCB.css';

export default function DCB() {
  return (
    <div className='dcb-container'>
      <img className='dcb-bg' src={process.env.PUBLIC_URL + '/img/dcb_bg.png '} alt='Daddy, Come Back! background' />
    </div>
  );
}
