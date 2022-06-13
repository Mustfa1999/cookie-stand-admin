import Head from 'next/head'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react'

function Home() {
  const [cookies, setCookies] = useState("click the \"Create\" button");

  const handleSubmit = (e) => {
    e.preventDefault();

    const location = e.target.loc.value;
    const minimum = e.target.min.value;
    const maximum = e.target.max.value;
    const average = e.target.avg.value;
    const newCookie = "{\"location\":"+location + ", \"minCustomers\":"+minimum + ", \"maxCustomers\":"+maximum + ", \"avgCookies\":"+average+" }";
    setCookies(newCookie);
  }

  return(
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <Main handleSubmit={handleSubmit} cookies={cookies}/>
      <Footer />
    </>
  )
}

export default Home
