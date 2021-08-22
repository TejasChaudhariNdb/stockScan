import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learn Technical And Fundelmental</title>
        <link rel="icon" href="/favicon.ico" />


        
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js"></script>
      </Head>

<div className={styles.grid}>
<Link href="chartPattern">
<div className={styles.card}>
<p>Charts </p>
</div>
</Link>

<Link href="candlePattern">
<div className={styles.card}>
<p>Candelstick </p>
</div>
</Link>
</div>

<h2>Tasks To DO </h2>
<ul>
  <li>Techhinacal Analiyis</li>
  <li>Candel Stick Pattern</li>
  <li>Fundamental </li>
  <li>Scan Chart /Capture Chart </li>
  
</ul> 
<Link href="/scanChart">Scan</Link>

<button className="button_61" role="button">Tejas</button>


<img src="https://libertex.com/sites/default/files/inline-images/forex-chart-patterns-1.jpg" style={{width:'100%'}}/>
     <br />
     <br />
     <br />
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TejasStocks

        </a>
      </footer>
    </div>
  )
}
