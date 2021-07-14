import React from 'react'

import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Servicos from '../components/Servicos'
import Portfolio from '../components/Portfolio'
import Customer from '../components/Customer'
import Form from '../components/Form'
// import GlobalStyle from '../../styles/global'
// import styles from '../../styles/Home.module.css'

class Home extends React.Component{

  render(){
      return (
        <>
        <div>
          <Head>
            <title>Capela Estúdio</title>
            <meta name="description" content="Estúdio Católico de Criação" />
            <link rel="icon" href="/favicon.png" />
          </Head>
          <Header />
          <Banner />
          <Servicos />
          <Portfolio />
          <Customer />
          <Form />
          <main>
           
          </main>
    
          <footer>
          </footer>
        </div>
        </>
      );
  }
}


export default Home;