import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import ArticlePreview from '../components/ArticlePreview/ArticlePreview';
import PageInfo from '../components/PageInfo/PageInfo';


const BlackLeft = styled.div`
background-color:black;
position:fixed;
top:0;
left:0;
width:280px;
height: 98%;

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
  grid-gap: 70px;

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
  const { allMdx: { nodes } } = data;
  return (
    <>

      <BlackLeft></BlackLeft>
      <ArticlesWrapper>
        {nodes.map(({ excerpt, frontmatter: { title, slug, featuredImage } }) => (
          <ArticlePreview title={title} excerpt={excerpt} image={featuredImage.childImageSharp.fluid} />
        ))}
      </ArticlesWrapper>
      <BlackRight></BlackRight>

      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
    </>
  );
}


export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 700, maxHeight: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`;

export default ArticlesPage;