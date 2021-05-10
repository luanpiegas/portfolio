import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Luan Piegas &mdash; WordPress Develoepr
        </h1>

        <p className={styles.description}>
          Contact me at: <a href="mailto:luan@luan.des.br">luan@luan.des.br</a> or <a href="https://api.whatsapp.com/send?phone=5554991949055">+55 54 991949055
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://instagram.com/luanpiegas"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </footer>
    </div>
  )
}
