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
        <title>Kotaroのポートフォリオサイト</title>
        <meta name="description" content="portfolio site" />
        <link rel="icon" href="/favicon.ico" />
        <style>@import url(&apos;https://fonts.googleapis.com/css2?family=Cinzel&display=swap&apos;);</style>
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
