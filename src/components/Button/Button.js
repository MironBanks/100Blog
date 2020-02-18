import styled from 'styled-components';

const Button = styled.button`
  background-color: #F0F0F3;
  border: none;
  padding: 10px 25px;
  color: #3e64ff;
  font-size: 13px;
  font-weight: 600;
  flex-shrink: 0;

  border-radius: 10px;
  box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
                -6px -6px 10px -1px rgba(255,255,255,0.7);
  border: 1px solid rgba(0,0,0,0.0);

   &:hover{
    box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
                inset -4px -4px 6px -1px rgba(255,255,255,0.7),
                -0.5px -0.5px 0 rgba(255,255,255,1),
                0.5px 0.5px 0 rgba(0,0,0,0.15),
                0px 12px 10px -10px rgba(0,0,0,0.05);
    border: 1px solid rgba(0,0,0,0.01);
  }

`;

export default Button;