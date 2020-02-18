import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from 'gatsby-image';
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer"


const ContentWrapper = styled.div`
  width: 50%;
  /*height: calc(100vh - 80px);*/
  height:70vh;
  position: absolute;
  top:200px;
  padding:25px;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  border-radius: 10px;

  box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
                -6px -6px 10px -1px rgba(255,255,255,0.7);
  border: 1px solid rgba(0,0,0,0.0);

  h1 {
    font-size: 105px;
    margin: 0;
    width: 70%;
    padding:25px 0 25px auto;
    line-height: 0.9;
  }

  p {
    margin: 60px 0 40px;
    width: 45%;
    font-size:23px;
  }


  @media only screen and (max-width: 1440px) {
    top:150px;
    width: 48%;

     h1 {
        font-size: 65px;
     }

     p {
        margin: 20px 0 40px;
        font-size:16px;
        width: 50%;
     }
  }

  @media only screen and (max-width: 1024px) {
    height:30vh;
    top:55%;
    width: 86%;

    h1 {
      width: 90%;
    }
  }
`;


const ImageWrapper = styled(Image)`
  position: absolute !important;
  top:200px;
  right: 0;
  width: 45%;
  height: 70vh;
  object-fit: cover;

  @media only screen and (max-width: 1440px) {
    top:150px; 
  }

  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 40vh;
  }
`;

const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      <h1>One hundred days</h1>
      <p>
        Even if You are on the right track You'll get run over, if You just sit there.
        </p>
      <Button>my last project</Button>
    </ContentWrapper>
    <ImageWrapper fluid={data.file.childImageSharp.fluid} />
    <Footer>
      <p>created by: mironbanks.com</p>
    </Footer>
  </>
);

export const query = graphql`
  {
      file(name: {eq: "hero"}) {
      childImageSharp{
        fluid(maxWidth:1200, maxHeight:800, quality:100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
