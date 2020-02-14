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
`;

const BlackRight = styled.div`
background-color:black;
position:fixed;
bottom:0;
left:55%;
width:2px;
height: 64%;
`;

const ArticlesWrapper = styled.div`
  margin-left:20%;
  width:500px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 7    0px;
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
          <ArticlePreview title={title} excerpt={excerpt} background={featuredImage.childImageSharp.fluid.src} />
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
                src
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