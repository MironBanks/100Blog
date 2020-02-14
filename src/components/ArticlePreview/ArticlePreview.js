import React from 'react';
import styled from 'styled-components';

const PreviewWrapper = styled.div`
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
  left: -40px;
  bottom: -35px;
  width: 100%;
  min-height: 40px;
  background-color: black;
  color: white;
  padding: 5px 15px;

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

const Preview = ({ title, excerpt, background }) => (
  <PreviewWrapper background={background}>
    <PreviewInfoLabel>
      <h2>{title}</h2>
      <p>{excerpt}</p>
    </PreviewInfoLabel>
  </PreviewWrapper>
);

export default Preview;
