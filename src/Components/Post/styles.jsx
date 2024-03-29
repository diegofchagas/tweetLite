import styled from "styled-components";

export const ContainerBox = styled.div`
  background-color: #202024;
  border-radius: 8px;
  padding: 2.5rem;
  margin-bottom: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  header time {
    font-size: 0.875rem;
    color: #8d8d99;
    line-height: 160%;
  }

  .card-profile {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  strong {
    display: block;
    color: #e1e1e6;
    font-size: 1rem;
    line-height: 160%;
  }

  span {
    display: block;
    color: #8d8d99;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 160%;
  }
`;

export const ContentPost = styled.div`
  margin-top: 1.875rem;
  line-height: 1.6;
  color: #c4c4cc;
  
  display: flex;
  flex-direction: column;
  gap: 1rem;


  p {
    margin-top: 1rem;
  }

  a {
    color: #00b37e;
    font-weight: 700;
    text-decoration: none;
  }

  a:hover {
    color: #e1e1e6;
  }
`;

export const FormComment = styled.form`
  border-top: 1px solid #323238;
  margin-top: 1.5rem;

  p {
    margin-top: 1.5rem;
    color: #e1e1e6;
    font-size: 1rem;
    font-weight: 700;
    line-height: 160%;
  }

  textarea {
    width: 100%;
    background-color: #121214;
    resize: none;
    border: none;
    padding:1rem;
    height:6rem;
    border-radius: 8px;
    color: #c4c4cc;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    outline: none;
    margin-top: 1rem;
    line-height: 140%;
  }

  textarea:focus {
    outline: 1px solid #00b37e;
  }

  .alert-text:focus{
    outline: 1px solid #F75A68;
  }

  .alert{
    color:#F75A68;
    font-size:.75rem;
  }

  footer {
    margin-top:1rem;
    visibility: hidden;
    max-height: 0;
  }

  /* Se houver um foco em input ou textarea aplica a estilizão informada. Para serve esse focus-within */
  &:focus-within footer {
    visibility: visible;
    max-height: none;
  }

  button {
    background-color: #00875f;
    padding: 1rem 1.5rem 0.875rem 1.5rem;
    border: none;
    color: #fff;
    font-weight: 700;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background 1s;
  }

  button:disabled{
    opacity:0.4;
    cursor: not-allowed;
  }

  button:not(:disabled):hover {
    background-color: #00b37e;
  }
`;
