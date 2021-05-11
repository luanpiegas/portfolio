import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Luan Piegas &mdash; WordPress / WooCommerce Developer</title>
        
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MF9N6CJEXM"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                <!-- Global site tag (gtag.js) - Google Analytics -->
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-MF9N6CJEXM"></script>
                <script>
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'G-MF9N6CJEXM');
                </script>
              `,
          }}
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Luan Piegas &mdash; WordPress Developer
        </h1>

        <p className={styles.description}>
          Contact me at: <a href="mailto:luan@luan.des.br" rel="noopener noreferrer">luan@luan.des.br</a> 
          <br/>
          or
          <br/>
          <a href="https://api.whatsapp.com/send?phone=5554991949055" rel="noopener noreferrer">+55 54 991949055</a>
        </p>
        <p className={styles.description}>
          Present: Studio Visual
          <br/>
          Past: Weecom, Alpina Digital, KIAI Agency, Burn The Flash and others.
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.99freelas.com.br/user/luan-piegas"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hire me on 99freelas (BR)
        </a>
      </footer> 
    </div>
  )
}
