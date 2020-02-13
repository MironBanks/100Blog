import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from 'gatsby-image';
import Button from "../components/Button/Button";

const ContentWrapper = styled.div`
  width: 50%;
  height: calc(100vh - 80px);
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  h1 {
    font-size: 105px;
    margin: 0;
    width: 60%;
    line-height: 0.9;
  }

  p {
    margin: 60px 0 40px;
    width: 45%;
    font-size:23px;
  }
`;

const FooterContainer = styled.div`
  position: absolute;
  bottom:0;
  left: 20px;
  width:160px;
  height: 190px;
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
`


const ImageWrapper = styled(Image)`
  position: absolute !important;
  top:200px;
  right: 0;
  width: 45%;
  height: 70vh;
  object-fit: cover;
`;

const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      <h1>One hundred days</h1>
      <p>
        Even if You are on the right track You'll get run over, if You just sit there.
      </p>
      <Button>estimate project</Button>
      <FooterContainer>
        <p>created by: mironbanks.com</p>
      </FooterContainer>
    </ContentWrapper>
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
