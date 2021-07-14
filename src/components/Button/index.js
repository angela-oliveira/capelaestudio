import React from 'react'
import { Container } from './styles';

class Button extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
          <>
          <Container>
              {this.props.text}
          </Container>
          </>
        )
    }
}
export default Button