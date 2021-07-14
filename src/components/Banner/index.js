import React from 'react'
import { Container, Text } from './styles';
import Image from 'next/image'
import banner from '../../../public/banner-temp.png'
import Button from '../Button'

class Banner extends React.Component{

  render(){
      return (
        <>
        <Container>
          <Text>Texto chamada</Text>

            <Button text="CTA" />
          {/* <Image
              src={banner}
              alt="Capela Estúdio"
          /> */}

        </Container>
        </>
      )
  }
}
export default Banner