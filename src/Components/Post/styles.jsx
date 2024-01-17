import styled from 'styled-components';

export const ContainerBox = styled.div`
  background-color:#202024;
  border-radius:8px;
  padding:2.5rem;
  margin-bottom:2rem;

  header{
   display: flex;
   justify-content:space-between;
   align-items:center;
  }
  header time{
    font-size:.875rem;
    color:#8D8D99;
    line-height: 160%;
  }

  .card-profile{
    display:flex;
    align-items:center;
    gap: 1rem;
  }

  strong{
    display:block;
    color:#E1E1E6;
    font-size: 1rem;;
    line-height: 160%;
  }

  span{
    display:block;
    color: #8D8D99;
    font-size: .875rem;
    font-weight: 400;
    line-height: 160%
  }
`;

export const ContentPost = styled.div`
margin-top: 1.875rem;
line-height:1.6;
color:#C4C4CC;
font-weight: 400;

p{
  margin-top:1rem;
}

ul{
  display:flex;
  gap:8px;
}

li{
  margin-top:1rem;
  list-style-type:none;
}

a{
  color: #00B37E;
  font-weight: 700;
  text-decoration:none;
}

a:hover{
  color:#E1E1E6;
}
`

export const FormComment = styled.form`
border-top: 1px solid #323238;
margin-top:1.5rem;


p{
  margin-top:1.5rem;
  color:#E1E1E6;
  font-size: 1rem;
  font-weight: 700;
  line-height: 160%;
}

textarea{
  width:100%;
  background-color:#121214;
  resize:none;
  border:none;
  padding: .813rem 32rem 3.813rem 1rem;
  border-radius: 8px;
  color:#C4C4CC;
  font-size:1rem;
  font-family: "Roboto", sans-serif;
  outline:none;
  margin: 1rem 0;
}

textarea:focus{
  outline: 1px solid #00B37E;
}

button{
  background-color:#00875F;
  padding: 1rem 1.5rem .875rem 1.5rem;
  border:none;
  color: #FFF;
  font-weight: 700;
  font-size:1rem;
  border-radius: 8px;
  cursor:pointer;
  transition: background 1s;
}

button:hover{
  background-color:#00B37E;
}

`