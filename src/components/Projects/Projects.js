import React from 'react';
import SocialLinks from '../SocialLinks';
import './Projects.css';

export default function Projects() {
  return (
    <div className='projects-container'>
      <h2 className='projects-title'>Projects</h2>
      <img
        className='projects-rpg-404'
        src={process.env.PUBLIC_URL + '/img/rpg_404_icon.png '}
        alt={`RPG 404`}
        onClick={() => window.open('https://rpg404.com/')}
      />
      <SocialLinks />
    </div>
  );
}
