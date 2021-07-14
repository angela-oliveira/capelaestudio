import React from 'react'
import { Container, Cards, Card } from './styles';

class Customer extends React.Component{

    render(){
        return (
          <>
            <Container>
              <h1>Clientes</h1>
              <Cards>
                <Card />
                <Card />
                <Card />
                <Card />
              </Cards>
            </Container>
          </>
        )
    }
}
export default Customer