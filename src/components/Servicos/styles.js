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
grid-template-columns: repeat(3, 1fr);
align-items: center;
margin: 2rem;
color: #667EEA;
font-size: 2rem;
`;
export const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 2rem;
padding: 1rem;
border: #565656 2px solid;
border-radius: 10px;
/* width: 80%; */
/* background-color: #c4c4c4; */
`;
export const Title = styled.div`
font-size: 1rem;
font-weight: bold;
color: #565656;
margin-top: 1rem;
`;
export const Description = styled.div`
font-size: 0.8rem;
color: #565656;
margin-top: 0.5rem;
`;