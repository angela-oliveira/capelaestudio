import React from 'react'
import { Container, Cards, Card, Title, Description } from './styles';
import { FaPenNib, FaBook, FaShareAlt, FaSitemap, FaFilm, FaCamera } from "react-icons/fa";

class Servicos extends React.Component{

    render(){
        return (
          <>
          <Container>
              <h1>Serviços</h1>
              <Cards>
                  <Card>
                      <FaPenNib />
                      <Title>Criação de Marca</Title>
                      <Description>Descição</Description>
                      
                    </Card>
                  <Card>
                      <FaBook />
                      <Title>Design Editorial</Title>
                      <Description>Descição</Description>
                      </Card>
                  <Card>
                      <FaShareAlt/>
                      <Title>Design para Redes Sociais</Title>
                      <Description>Descição</Description>
                      </Card>
                  <Card>
                      <FaSitemap />
                      <Title>Gestão de Tráfego</Title>
                      <Description>Descição</Description>
                      </Card>
                  <Card>
                      <FaFilm />
                      <Title>Produção de Vídeo</Title>
                      <Description>Descição</Description>
                      </Card>
                  <Card>
                      <FaCamera />
                      <Title>Produção Fotográfica</Title>
                      <Description>Descição</Description>
                      </Card>
              </Cards>

          </Container>
          </>
        )
    }
}
export default Servicos