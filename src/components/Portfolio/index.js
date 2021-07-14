import React from 'react'
import { Container, Cards, Card } from './styles';

class Portfolio extends React.Component{

    render(){
        return (
          <>
            <Container>
              <h1>Portfólio</h1>
              <Cards>
                <Card />
                <Card />
                <Card />
                <Card />
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
export default Portfolio