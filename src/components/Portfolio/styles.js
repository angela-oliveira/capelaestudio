import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  color: #260A84;
`;
export const Cards = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
margin-top: 2rem;
`;
export const Card = styled.div`
width: 250px;
height: 250px;
background-color: #c4c4c4;
border: #fff 1px solid;
/* width: 80%; */
/* background-color: #c4c4c4; */
`;