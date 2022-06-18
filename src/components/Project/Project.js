import React from 'react';
import './Project.css';

export default function Project() {
  return (
    <div className='project-container'>
      <h2 className='project-title'>Projects</h2>
      <img
        className='project-rpg-404'
        src={process.env.PUBLIC_URL + '/img/rpg_404_icon.png '}
        alt={`RPG 404`}
        onClick={() => window.open('https://rpg404.com/')}
      />
    </div>
  );
}
