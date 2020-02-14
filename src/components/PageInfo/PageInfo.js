import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position:fixed;
  margin: 50px 0;
  width:40vw;
  top:30vh;
  left:56vw;

  h1 {
    font-size: 105px;
    margin: 0;
  }

  p {
    font-size: 23px;
    margin: 15px 0 0;
  }

  @media only screen and (max-width: 1440px) {
     left:70vw;

     h1 {
        font-size: 65px;
     }

     p {
        font-size:16px;
        width: 60%;
     }
  }
`;

const PageInfo = ({ title, paragraph }) => (
  <Wrapper>
    <h1>{title}</h1>
    <p>{paragraph}</p>
  </Wrapper>
);

export default PageInfo;