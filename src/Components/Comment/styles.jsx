import styled from "styled-components";

export const CoomentContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 1.125rem;
  display: flex;
  gap: 1rem;

  .container-box {
    flex: 1;
  }
`;

export const BoxContainer = styled.div`
  flex: 1;

  footer button {
    border: none;
    background-color: transparent;
    color: #8d8d99;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    margin-top: 1rem;
    cursor: pointer;
    font-size:.875rem;

    display: flex;
    align-items: center;
  }
  footer button svg {
    margin-right: 0.5rem;
  }

  footer button small{
    font-size:.875rem;
  }

  footer button small::before {
    content: "\\2022";
    padding: 0.25rem;
  }

  footer button:hover {
    color: #e1e1e6;
  }
`;

export const CommentContent = styled.div`
  background-color: #29292e;
  border-radius: 9px;
  padding: 1rem;

  header strong {
    color: #e1e1e6;
    font-size: 0.875rem;
    line-height: 160%;
  }

  header time {
    color: #8d8d99;
    font-size: 0.75rem;
    line-height: 160%;
  }

  p {
    margin-top: 1rem;
    color: #c4c4cc;
    font-size: 0.875rem;
    line-height: 160%;
  }

  button {
    color: #8d8d99;
    cursor: pointer;
    border: none;
    background-color: transparent;
    line-height: 0;

    margin-top: -16px;
  }

  button:hover {
    color: #f75a68;
  }
`;
