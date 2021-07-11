import Head from 'next/head'
import Header from '../components/Header/header'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Capela Estúdio</title>
        <meta name="description" content="Estúdio Católico de Criação" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className={styles.main}>
       
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
