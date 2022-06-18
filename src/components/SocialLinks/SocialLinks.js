import React, { useRef } from 'react';
import './SocialLinks.css';

const SocialLink = (props) => {
  const image = useRef();
  return (
    <div
      className='social-icon'
      onMouseEnter={() => {
        image.current.src = process.env.PUBLIC_URL + props.iconHover;
      }}
      onMouseLeave={() => {
        image.current.src = process.env.PUBLIC_URL + props.iconNormal;
      }}
      onClick={props.onClick}>
      <img ref={image} className='social-icon-img' src={process.env.PUBLIC_URL + props.iconNormal} alt={props.alt} />
    </div>
  );
};

export default function SocialLinks() {
  const links = [
    {
      ref: null,
      iconNormal: '/img/social/icon_twitter.png',
      iconHover: '/img/social/icon_twitter_hover.png',
      alt: 'Twitter',
      onClick: () => {
        window.open('https://twitter.com/rug_pull_games');
      },
    },
    {
      ref: null,
      iconNormal: '/img/social/icon_discord.png',
      iconHover: '/img/social/icon_discord_hover.png',
      alt: 'Discord',
      onClick: () => {
        window.open('https://discord.com/');
      },
    },
  ];

  return (
    <div className='social-links'>
      {links.map((sl) => {
        return <SocialLink {...sl} key={`social-icon-${sl.alt}`} />;
      })}
    </div>
  );
}
