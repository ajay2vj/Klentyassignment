import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Acceleration from './components/acceleration'
import CustomerSection from './components/customer'
import HomeSection from './components/homeSection'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Klenty</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/kl_new_pink.png" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
      </Head>
      <Navbar />
      <HomeSection />
      <Acceleration />
      <CustomerSection />
    </div>
  )
}
