import React from 'react';
import './Logo.css';

export default function Logo() {
  return (
    <div className='rpg-logo-container'>
      <img className='rpg-logo-img' src={process.env.PUBLIC_URL + '/img/rpg_logo_r.svg '} alt='Logo' />
    </div>
  );
}
