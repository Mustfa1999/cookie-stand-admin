import Head from 'next/head'
import Header from './Header'
import CreateForm from './CreateForm'
import Footer from './Footer'
import ReportTable from './ReportTable'
import { useState } from 'react'


function CookieStandAdmin(props) {
  const [counter, setCounter] = useState(0);
  const [rows, setRows] = useState([]);
  const [totals, setTotals] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCounter(counter + 1);

    var randomArray = (length, max, min) => { return Array(length).fill().map(() => 
      Math.round(Math.random() * (max - min) + min))}
    
    var values = randomArray(14, e.target.max.value, e.target.min.value)
    
    let newRow = {
        location: e.target.loc.value,
        min: e.target.min.value,
        max: e.target.max.value,
        avg: e.target.avg.value,
        values: values
    };

    let newTotals = []
    for (let i = 0; i < values.length; i++) {
        newTotals.push(values[i] + totals[i])
    }
    
    setRows([...rows, newRow]);
    setTotals(newTotals);
  }

  return(
    <div className="w-full bg-emerald-100 flex items-center content-center 
    justify-center flex-col">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header setToken={props.setToken} setIsLogged={props.setIsLogged}/>
      <CreateForm handleSubmit={handleSubmit}/>
      {
        rows.length == 0 ? 
        (<h2 className="text-black text-2xl font-bold py-10">No Cookie Stands Available</h2>) : 
        (<ReportTable rows={rows} totals={totals} token={props.token}/>) 
      }
      <Footer counter={counter}/>
    </div>
  )
}

export default CookieStandAdmin
