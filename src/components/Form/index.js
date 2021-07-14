import React from 'react'
import { Container, Input } from './styles';

import Button from '../Button'
class Customer extends React.Component{

    render(){
        return (
          <>
            <Container>
            <form>
              <Input>
                  <input placeholder="Nome" type="text" name="name" />
          
          
                  <input placeholder="E-mail" type="text" name="email" />

              </Input>
              <Input>
                <textarea placeholder="Mensagem" type="text" name="mensagem" />

              </Input>
              <Input>
                

                <Button text="Enviar"><input type="submit" value="Enviar" /></Button>
              </Input>
              
            </form>
            </Container>
          </>
        )
    }
}
export default Customer