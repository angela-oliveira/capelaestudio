import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  height: calc(100% - 80px);
  background-color: #fff;
  padding: 1rem 10rem;
`;
export const Logo = styled.div`
  width: 10%;
`;
export const Social = styled.div`
  color: #667EEA;
  svg{
    margin: 0.5rem;
  }

`;
export const Menu = styled.div`
  ul {
  display: flex;
  flex-direction: row;
  li {
    margin: 1rem;
    color: #260A84;
  }
}

`;