import React from 'react';
import ProgressiveImage from 'react-progressive-image';

import * as IMAGE from '../constants/constants';

const delay = () => {
  return (
    <div>
      <header className="App-header">
        With delay
      </header>
      <ProgressiveImage
        delay={3000}
        src={IMAGE.dogImage}
        placeholder={IMAGE.placeholderImage}
      >
        {src => <img src={src} alt="an dog" />}
      </ProgressiveImage>
    </div>
  );
};

export default delay;