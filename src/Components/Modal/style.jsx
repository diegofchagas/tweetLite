import styled from 'styled-components';

export const Container = styled.div`
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background: rgba(0, 0, 0, 0.75);

  .modal{
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    background-color:#202024;
    padding: 1.5rem 2rem 2rem 2rem;
    border-radius:8px;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:1.5rem;
  }

  h2{
  color:#E1E1E6;
  text-align: center;
  font-size: 1.5rem;
  line-height: 140%; 
  }

  p{
  color: #C4C4CC;
  text-align: center;
  line-height: 162.5%; 
  }

  .container-btns{
    display:flex;
    gap:8px;
    
    
  }

  .container-btns .btn-one{
    background-color:transparent;
    padding: .75rem 2rem;
    font-size:.875rem;
    font-weight:700;
    font-family: "Roboto", sans-serif;
    border:none;
    line-height: 24px;
    color:#E1E1E6;
    cursor: pointer;
  }
  .container-btns .btn-one:hover{
    background-color:#29292E;;
    border-radius:8px;
    color:#FFF;
  }

  .container-btns .btn-two{
    background-color:#29292E;
    padding: .75rem 2rem;
    font-size:.875rem;
    font-weight:700;
    font-family: "Roboto", sans-serif;
    border:none;
    line-height: 24px;
    border-radius:8px;
    color:#F75A68;
    cursor: pointer;
  }
`;
