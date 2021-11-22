import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Fabian Kropfhamer</h1>
      <ul>
        <li><a href="https://www.instagram.com/fabyyyyyyyyyyyyyyyyyyy/">Instagram</a></li>
        <li><a href="https://github.com/fkropfhamer">Github</a></li>
        <li><a href="https://twitter.com/FabiNichtHappy">Twitter</a></li>
      </ul>
    </div>
  )
}
