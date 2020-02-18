import styled from 'styled-components';

const Footer = styled.div`
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

export default Footer;