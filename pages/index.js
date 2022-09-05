import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>4ANOTHER</title>
        <meta name="description" content="4ANOTHER" />
        <link rel="icon" href="/4ANOTHER.svg" />
      </Head>

      <main className={styles.main}>
       <Image src="/4ANOTHER.svg" alt="4another" width={72} height={16} />
      </main>

     
    </div>
  )
}
