import React from 'react'
import { Container, Logo, Social, Menu } from './styles';
import Image from 'next/image'
import logo from '../../../public/logo.png'
import { FaInstagram, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

class Header extends React.Component{

    render(){
        return (
          <>
          <Container>
              <Logo>
                  <Image
                      src={logo}
                      alt="Capela Estúdio"
                  />

              </Logo>
              <Social>
                  <FaInstagram />
                  <FaWhatsapp />
                  <FaTelegramPlane />
              </Social>
              <Menu>
                  <ul>
                      <li>Sobre</li>
                      <li>Serviços</li>
                      <li>Portfólio</li>
                      <li>Blog</li>
                      <li>Fale Conosco</li>
                  </ul>
              </Menu>
          </Container>
          </>
        )
    }
}
export default Header