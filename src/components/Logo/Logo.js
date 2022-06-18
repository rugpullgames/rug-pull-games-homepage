import React from 'react';
import './Logo.css';

export default function Logo() {
  return (
    <div rpg-logo>
      <img className='rpg-logo-img' src={process.env.PUBLIC_URL + '/img/rpg_logo.svg '} alt='Logo' />
    </div>
  );
}
