import axios from 'axios';
import {useEffect} from 'react';


function ReportTable(props) {    
    async function DeleteData(id) {
        await axios.delete(`https://cookie-stand-v1.herokuapp.com/api/v1/cookiestands/${id}/`,{headers:{'Authorization': `Bearer ${props.token}`}})
        .then(res => {GetData(); console.log("deleted data", res)})
        .catch(e => {console.log("delete error", e)})    
    }
  
    async function GetData() {
        await axios.get("https://cookie-stand-v1.herokuapp.com/api/v1/cookiestands/",{headers:{'Authorization': `Bearer ${props.token}`}})
        .then(res => {console.log("data", res.data)})
        .catch(e => {console.log("data error", e)})
    }

  useEffect(() => { GetData(); },[])

    return(
        <>
        <table className="w-1/2 mx-auto my-4">
            <thead className="border-2 border-black">
                <th className="bg-emerald-600 px-4 py-2">Location</th>
                {
                    ["6am","7am","8am","9am","10am","11am","12am","1pm", 
                    "2pm","3pm","4pm","5pm","6pm","7pm"].map(cell => {
                        return (<th className="px-4 py-2 bg-emerald-600">{cell}</th>);
                    })
                }
                <th className="bg-emerald-600 px-4 py-2">Total</th>
            </thead>
            
            <tbody>
              {
                
                props.rows.map(row => {
                    return(
                        <tr>
                            <td className="border-2 border-black bg-emerald-300 py-2">
                            {row.location}
                            <svg 
                            onClick ={()=>DeleteData(location.id)} 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="  h-5 w-5 left-1" 
                            viewBox="0 0 20 20" 
                            fill="currentColor">
                                <path fillRule="evenodd" 
                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" 
                                    clipRule="evenodd"/>
                            </svg>
                            </td>

                            {
                            row.values.map(num => {
                                return (<td className="border-2 border-black bg-emerald-300 py-2">{num}</td>);
                            })
                            }

                            <td className="border-2 border-black bg-emerald-300 py-2">
                            {row.values.reduce((total, curr) => total += curr, 0)}
                            </td>
                        </tr>
                    );
                })
            }
            
            </tbody>

            <tfoot className="font-bold">
                <td className="border-2 border-black bg-emerald-600">Totals</td>

                {
                    props.totals.map(num => {
                        return (<td className="border-2 border-black bg-emerald-600">{num}</td>);
                    })
                }

                <td className="border-2 border-black bg-emerald-600">
                    {props.totals.reduce((total, curr) => total += curr, 0)}
                </td>

            </tfoot>
            
        </table>
                
        </>
    )
}

export default ReportTable
