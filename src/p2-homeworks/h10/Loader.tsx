import React from 'react';
import ring from './DualRing.gif'

const Loader = () => {
    return (
       <img src={ring} alt={'Loader'} style={{display: 'block'}}></img>
    );
};

export default Loader;