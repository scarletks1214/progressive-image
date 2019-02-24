import React from 'react';
import ProgressiveImage from 'react-progressive-image';

import * as IMAGE from '../constants/constants';

const srcSet = () => {
  const srcLionSetData = `${IMAGE.lionImage1} 640w, ${IMAGE.lionImage2} 1280w, ${IMAGE.lionImage3} 1920w`;
  return (
    <div>
      <header className="App-header">
        With srcSet
      </header>
      <ProgressiveImage
        src={IMAGE.lionImage}
        srcSetData={{
          srcSet: srcLionSetData,
          sizes: '(max-width: 1000px) 100vw, 1000px'
        }}
        placeholder={IMAGE.lionImage1}
      >
        {(src, _loading, srcSetData) => (
          <img
            src={src}
            srcSet={srcSetData.srcSet}
            sizes={srcSetData.sizes}
            alt="an lion"
          />
        )}
      </ProgressiveImage>
    </div>
  );
};

export default srcSet;