import React from 'react';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import './Apropos.scss';
const APropos = () => {
  return (
    <div>
    <Banner showOverlay={false} showText={false} />
    <div className='faq'>
    <Collapse title="Fiabilités" content="bbbbbbbbbbbbbbbbbbbbbbb" />
    <Collapse title="Respect" content="bbbbbbbbbbbbbbbbbbbb" /> 
    <Collapse title="Service" content="bbbbbbbbbbbbbbbbbbbb" /> 
    <Collapse title="Securité" content="bbbbbbbbbbbbbbbbbbbb" /> 
    </div>
    </div>
  );
};

export default APropos;
