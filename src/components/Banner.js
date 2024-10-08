import React from 'react';
import './Banner.scss'; 
import imagedefonddacceuil from '../assets/imagedefondacceuil.png';

const Banner = ({ showOverlay = true, showText = true, text = 'Chez vous, partout et ailleurs' }) => {  
  return (
    <div className="accueil">
      <div className={`banniere ${showOverlay ? 'with-overlay' : ''}`}> 
        <img src={imagedefonddacceuil} alt="bannierevoyage" className="image-banniere" />
        {showText && <p className='text-banniere'>{text}</p>} 
      </div> 
    </div>
  );
};

export default Banner;

