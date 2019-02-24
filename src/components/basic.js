import React from 'react';
import ProgressiveImage from 'react-progressive-image';

import * as IMAGE from '../constants/constants';

const basic = () => {
  return (
    <div>
      <header className="App-header">
        Basic
      </header>
      <ProgressiveImage
        src={IMAGE.dogImage}
        placeholder={IMAGE.placeholderImage} >
        {src => <img src={src} alt="a dog" />}
      </ProgressiveImage>
    </div>
  );
};

export default basic;