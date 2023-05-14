import { useState, useEffect } from 'react';
import { styled, Box, Typography } from '@mui/material';

const images = [
  {
    url: 'https://images.pexels.com/photos/2166824/pexels-photo-2166824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Social',
  },
  {
    url: 'https://images.pexels.com/photos/1914982/pexels-photo-1914982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Familial',
  },
  {
    url: 'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'professionnel life',
  },
  {
    url: 'https://images.pexels.com/photos/4218580/pexels-photo-4218580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Education',
  },
  {
    url: 'https://images.pexels.com/photos/1104014/pexels-photo-1104014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Childhood',
  },
];

const Slideshow = styled(Box)`
position: relative;
top: 0;
left: 0;
height: 50vh;
width: 100%;


`;

const Slide = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  background-image: ${(props) => `url(${props.url})`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

const Title = styled(Typography)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  font-family:"Stencil Std, fantasy	";
  font-size: 70px;
  font-weight: 900;
  color: #fff; /* Utilisez la couleur blanche (#fff) */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: slideIn 1s ease-in-out forwards;

  @keyframes slideIn {
    from {
      transform: translateX(-50%) scale(0.8);
      opacity: 0;
    }
    to {
      transform: translateX(-50%) scale(1);
      opacity: 1;
    }
  }
`;






const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ marginTop: 0, margin: 0 }}>
      <Slideshow>
        {images.map((image, index) => (
          <Slide key={index} active={index === activeIndex} url={image.url}>
            <Title>{image.title}</Title>
          </Slide>
        ))}
      </Slideshow>
    </Box>
  );
};

export default Banner;
