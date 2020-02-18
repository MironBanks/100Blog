import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import slugify from 'slugify';
import ArticlePreview from '../components/ArticlePreview/ArticlePreview';
import PageInfo from '../components/PageInfo/PageInfo';


const BlackLeft = styled.div`
background-color:black;
position:fixed;
bottom:0;
left:0;
width:280px;
height: 90%;

@media only screen and (max-width: 1440px) {
    width:230px;
  }
`;

const BlackRight = styled.div`
background-color:black;
position:fixed;
bottom:0;
left:55%;
width:2px;
height: 64%;

@media only screen and (max-width: 1440px) {
    left:66%; 
  }
`;

const ArticlesWrapper = styled.div`
  margin-left:20%;
  margin-bottom:60px;
  width:500px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 120px;

  @media only screen and (max-width: 1440px) {
    margin-left:23%;
    width:400px;
    grid-gap: 70px;
  }
`;

const pageData = {
  title: 'articles',
  paragraph: `Even if You are on the right track You'll get run over, if You just sit there.`,
}

const ArticlesPage = ({ data }) => {
  const {
    allDatoCmsArticle: { nodes },
  } = data;
  return (
    <>
      <BlackLeft></BlackLeft>
      <ArticlesWrapper>
        {nodes.map(({ title, featuredImage }) => (
          <ArticlePreview
            key={title}
            title={title}
            image={featuredImage.fluid}
            slug={slugify(title, { lower: true })}
          />
        ))}
      </ArticlesWrapper>
      <BlackRight></BlackRight>

      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
    </>
  );
}


export const query = graphql`
  {
    allDatoCmsArticle {
      nodes {
        title
        featuredImage {
          fluid(maxWidth: 500) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`;

export default ArticlesPage;