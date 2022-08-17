import React, { useCallback, useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import images from '../../data/carousal.json';
import Box from '@mui/material/Box';

const Carousal = () => {
  const [activeChild, setActiveChild] = useState(0);

  const pictures = images.pictures;

  const changeChild = useCallback(
    (e) => {
      if (e.key === 'ArrowLeft') {
        setActiveChild((a) => (a - 1 < 0 ? pictures.length - 1 : a - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveChild((a) => (a + 1 > pictures.length - 1 ? 0 : a + 1));
      }
    },
    [pictures]
  );

  useEffect(() => {
    document.addEventListener('keydown', changeChild);

    return function cleanup() {
      document.removeEventListener('keydown', changeChild);
    };
  });

  return (
    <div style={{ zIndex: -1000 }}>
      <Carousel
        navButtonsProps={{
          style: {
            borderRadius: 50,
            position: 'initial',
            marginTop: 100,
          },
        }}
        indicators={false}
        index={activeChild}
        autoPlay={true} // <-- You probaly want to disable this for our purposes
        navButtonsAlwaysVisible>
        {pictures.map((picture, i) => {
          return (
            <Box
              key={i}
              component="img"
              sx={{
                height: 'full',
                display: 'absolute',
                overflow: 'hidden',
                width: '100%',
                zIndex: -100,
              }}
              src={picture.src}
              alt={picture.alt}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default Carousal;
