import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Navigation from "../components/Navigation/Navigation"
import Button from "../components/Button/Button";

const ContentWrapper = styled.div`
  width: 60%;
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
    width: 40%;
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


const ImageWrapper = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  object-fit: cover;
`;

const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      <h1>One hundred days</h1>
      <p>
        Even if You are on the right track You'll get run over if You just sit there.
      </p>
      <Button>estimate project</Button>
      <FooterContainer>
        <p>created by: mironbanks.com</p>
      </FooterContainer>
    </ContentWrapper>
    <ImageWrapper src={data.file.publicURL} />
  </>
);

export const query = graphql`
  {
    file(name: {eq: "hero"}) {
      publicURL
    }
  }
`

export default IndexPage
