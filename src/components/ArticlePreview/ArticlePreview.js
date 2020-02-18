import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

const PreviewWrapper = styled(Link)`
  display: block;
  position: relative;
  width: 100%;
  height: 340px;
  background-color: hsl(0, 0%, 95%);
  background-image: url(${({ background }) => background});
  background-size: cover;

  @media only screen and (max-width: 1440px) {
    height: 240px;
  }
`;

const PreviewInfoLabel = styled.div`
  position: absolute;
  
  bottom: -60px;
  width: 100%;
  min-height: 40px;
  background-color: #F0F0F3;
  color: black;
  padding: 5px 15px;
  border-radius: 30px;
  box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
                -6px -6px 10px -1px rgba(255,255,255,0.7);
  border: 1px solid rgba(0,0,0,0.0);

  &:hover{
    box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
                inset -4px -4px 6px -1px rgba(255,255,255,0.7),
                -0.5px -0.5px 0 rgba(255,255,255,1),
                0.5px 0.5px 0 rgba(0,0,0,0.15),
                0px 12px 10px -10px rgba(0,0,0,0.05);
    border: 1px solid rgba(0,0,0,0.01);
  }

  h2,
  p {
    margin: 5px;
  }

  @media only screen and (max-width: 1440px) {
    h2{
      font-size:15px;
    }

    p{
      font-size:13px;
    }
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


const Preview = ({ title, excerpt, image, slug }) => (
  <PreviewWrapper to={`/articles/${slug}`}>
    <StyledImage fluid={image} />
    <PreviewInfoLabel>
      <h2>{title}</h2>
      <p>{excerpt}</p>
    </PreviewInfoLabel>
  </PreviewWrapper>
);

export default Preview;
