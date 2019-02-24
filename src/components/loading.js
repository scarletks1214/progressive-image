import React from 'react';
import ProgressiveImage from 'react-progressive-image';

import * as IMAGE from '../constants/constants';

const loading = () => {
  return (
    <div>
      <header className="App-header">
        With loading
      </header>
      <ProgressiveImage src={IMAGE.dogImage} placeholder={IMAGE.placeholderImage}>
        {(src, loading) => (
          <img style={{ opacity: loading ? 0.5 : 1 }} src={src} alt="an dog" />
        )}
      </ProgressiveImage>
    </div>
  );
};

export default loading;