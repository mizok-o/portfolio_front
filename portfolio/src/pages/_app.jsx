import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/globals.sass'
import '../styles/default.sass'
import styles from '../styles/Home.module.sass'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default MyApp
