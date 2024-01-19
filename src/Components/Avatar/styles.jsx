import styled from 'styled-components';

export const ImgAvatar = styled.img`
  width:${({hasBorder}) => hasBorder ? 'calc(3rem + 8px)' : '3.2rem'};
  height:${({hasBorder}) => hasBorder ? 'calc(3rem + 8px)' : '3.2rem'};
  border: ${({hasBorder})=> hasBorder ? '2px solid #202024' : '' };
  outline: ${({hasBorder})=> hasBorder ? '2px solid #00B37E' : ''};
  border-radius:8px;
  box-sizing:initial;

`;
