import React from "react"
import styled from 'styled-components';
import PageInfo from '../components/PageInfo/PageInfo';
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
    font-size: 65px;
    margin: 0;
    width: 60%;
    padding:25px 0 25px auto;
    line-height: 0.9;
  }

  p {
    margin: 60px 0 40px;
    width: 45%;
    font-size:18px;
    font-weight: 200;
  }

  @media only screen and (max-width: 1440px) {
    top:140px;
    width: 55%;
    height:75vh;

     h1 {
        font-size: 25px;
        width: 70%;
     }

     p {
       font-size:13px;
        width: 90%;
     }
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


const pageData = {
  title: 'about',
  paragraph: `There is only one rule: Code minimum an hour every day for the next 100 days.`,
}

const AboutPage = ({ data }) => (
  <>

    <ContentWrapper>
      <h1>What the #100DaysChallenge can do for you?</h1>
      <p>
        Coding will become a daily habit for you — a habit that you can easily maintain after you’ve finished the
        challenge.
        <br />
        <br />
        Every day that you consistently code, you’ll build momentum. That momentum will make it easier for you to
        learn more advanced topics. You won’t have to spend extra time trying to remember what you did previously.
        You can stay in the “flow” of coding.
        <br />
        <br />
        The projects that you’ll build will be small in scope, so by the time you finish, you’ll have completed
        several of them — and gained a wide range of experience.
        <br />
        <br />
        These projects will give you practice with concepts that frequently come up during developer job interviews.
        <br />
        <br />
        Your GitHub profile will look extremely active. And yes, hiring managers and recruiters do look at these.
        <br />
        <br />
        You’ll greatly diminish your fear of starting a new coding project. It will become a natural, ordinary thing to do.
        <br />
        <br />
        You’ll have a good reason to stop procrastinating and start coding every day.
      </p>
    </ContentWrapper>

    <BlackRight></BlackRight>

    <Footer>
      <p>created by: mironbanks.com</p>
    </Footer>

    <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
  </>
)

export default AboutPage
