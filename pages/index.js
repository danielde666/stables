import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      



         <title>
          4ANOTHER
        </title>
        <meta
          name="description"
          content="4ANOTHER"
        />
        <meta charSet="UTF-8"></meta>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="4ANOTHER" />
        <meta
          property="og:description"
          content="4ANOTHER"
        />
        <meta property="og:url" content="https://4another.world/" />
        <meta property="og:site_name" content="4ANOTHER" />
        <meta property="og:image" content="/4asc.jpg" />
        <meta property="og:image:width" content="596" />
        <meta property="og:image:height" content="379" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@4anohter" />
        <meta name="msapplication-TileImage" content="/4asc.jpg" />
        <link rel="icon" href="/4a.svg" sizes="32x32" />
        <link rel="icon" href="/4a.svg" sizes="192x192" />
        <link rel="apple-touch-icon" href="//4asc.jpg" />
        <link rel="canonical" href="https://4another.world/" />






      </Head>

      <main className={styles.main}>
       <Image src="/4ANOTHER.svg" alt="4another" width={204} height={19} />
      </main>

     
    </div>
  )
}
