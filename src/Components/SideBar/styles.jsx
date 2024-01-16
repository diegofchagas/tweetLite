import styled from 'styled-components';

export const Aside = styled.aside`
  background-color: #202024;
  overflow:hidden;
  border-radius: 8px;

  .image-profile{
    width:100%;
    height:72px;
    object-fit:cover;
  }
  .profile{
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top: calc(0px - 1.5rem - 4px);
    
  }

  .profile strong{
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    line-height: 160%; 
    margin-top:1rem;
  }

  .profile span{
    font-family: "Roboto", sans-serif;
    font-size: .875rem;
    font-weight: 400;
    line-height: 160%; 
    color: #8D8D99;
    margin-bottom:1.5rem;
  }

  footer{
    border-top: 1px solid #323238;
    padding: 1.5rem 2rem 2rem;
  
  }

  footer a{
  color:#00B37E;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-decoration:none;
  padding: 1rem 1.5rem .875rem 1.5rem;
  border: 1px solid #00B37E;
  border-radius: 8px;
    background-color:transparent;
  display:flex;
  align-items:center;
  justify-content:center;
  gap: 4px;
  transition:all 1s;
  }

  footer a:hover{
  background-color:#00875F;
  color:#FFF;
  }
`;
