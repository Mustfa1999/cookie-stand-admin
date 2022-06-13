import Head from 'next/head'
import Header from './Header'
import CreateForm from './CreateForm'
import Footer from './Footer'
import ReportTable from './ReportTable'
import { useState } from 'react'


function CookieStandAdmin() {
  const [counter, setCounter] = useState(0);
  const [rows, setRows] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
    
    // let hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36];

    // const randomValues = [];
    // for (let index = 0; index < hourly_sales.length; index++) {
    //     randomValues.push(Math.floor(Math.random() * 100));
    // }
    // console.log(randomValues);

    let newRow = {
        location: e.target.loc.value
    };

    setRows([...rows, newRow]);
  }

  return(
    <div className="w-full bg-emerald-100 flex items-center content-center 
    justify-center flex-col">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header />
      <CreateForm handleSubmit={handleSubmit}/>
      {
        rows.length == 0 ? 
        (<h2 className="text-black text-2xl font-bold py-10">No Cookie Stands Available</h2>) : 
        (<ReportTable rows={rows}/>) 
      }
      <Footer counter={counter}/>
    </div>
  )
}

export default CookieStandAdmin
