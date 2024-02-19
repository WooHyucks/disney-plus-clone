import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(5 ,1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1 ,1fr);
  }
`

const Wrap = styled.div`
  padding-top: 60%;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border: 3px solid #606060;
  transition: all 250ms ease-in 0s; 
  img {
    inset: 0px;
    display: block;
    height: 100%;
    opacity: 1;
    position: absolute;
    width: 100%;
    z-index: 1;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    transform: scale(1.05);
    border-color: white;
    video {
      opacity: 1;
    }
  }
`;

const Wraps = ({ imgSrc, alt, videoSrc }) => {
  return (
    <Wrap>
      <img src={imgSrc} alt={alt} />
      <video autoPlay loop muted>
        <source src={videoSrc} />
      </video>
    </Wrap>
  );
};


const Category = () => {
  return (
    <Container>
      <Wraps imgSrc="/images/viewers-disney.png" alt="disney" videoSrc="/videos/disney.mp4" />
      <Wraps imgSrc="/images/viewers-marvel.png" alt="marvel" videoSrc="/videos/marvel.mp4" />
      <Wraps imgSrc="/images/viewers-national.png" alt="national" videoSrc="/videos/national-geographic.mp4" />
      <Wraps imgSrc="/images/viewers-pixar.png"alt="pixar" videoSrc="/videos/pixar.mp4" />
      <Wraps imgSrc="/images/viewers-starwars.png" alt="starwars" videoSrc="/videos/star-wars.mp4" />
    </Container>
  )
}

export default Category