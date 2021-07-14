import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem 2rem;
  color: #260A84;
`;
export const Input = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
/* position: relative; */
padding-top: 1.5rem;
input {
	border: 0;
	background-color: transparent;
	border-bottom: 2px solid #c4c4c4; 
	font: inherit;
	font-size: 1.125rem;
  padding: .25rem;
  margin: 0 1rem;
};
textarea {
	border: 0;
	background-color: transparent;
	border-bottom: 2px solid #c4c4c4; 
	font: inherit;
	font-size: 1.125rem;
  padding: .25rem;
  margin: 0 1rem;
  width: 100%;

}
`;
