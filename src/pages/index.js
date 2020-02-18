import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from 'gatsby-image';
import Button from "../components/Button/Button";

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
    width: 60%;
    padding:25px 0 25px auto;
    line-height: 0.9;
  }

  p {
    margin: 60px 0 40px;
    width: 45%;
    font-size:23px;
  }

  @media only screen and (max-width: 1440px) {
     h1 {
        font-size: 65px;
     }

     p {
        margin: 20px 0 40px;
        font-size:16px;
        width: 50%;
     }
  }
`;

const FooterContainer = styled.div`
  position: absolute;
  bottom:0;
  left: 20px;
  width:160px;
  height: 160px;
  background-color:black;

  display: flex;
  justify-content:center;
  align-items:flex-end;
  text-align:center;

  p{
    margin-bottom:10px;
    width:100%;
    color:white;
    font-size:10px;
  }

  @media only screen and (max-width: 500px) {
    height: 30px;
    width:170px;

    p{
      margin-bottom:8px;
    }
  }
`


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
    <FooterContainer>
      <p>created by: mironbanks.com</p>
    </FooterContainer>
    <ImageWrapper fluid={data.file.childImageSharp.fluid} />
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
