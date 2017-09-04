import React from 'react';
import { Slide, Heading, Image } from 'spectacle';

import images from 'images';
import { backgroundWithImage } from 'styles';

export default (
  <Slide key="workshop5" transition={['fade']} style={backgroundWithImage}>
    <Heading size={1} caps fit lineHeight={1} textColor="secondary">
      Thank you!
    </Heading>
    <Image src={images.logo} width="375px" height="150px" />
  </Slide>
);
