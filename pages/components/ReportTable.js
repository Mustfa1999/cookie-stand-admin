import hourly_sales from "../../data";

function ReportTable(props) {
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
                  return (
                    <tr>
                        <td className="border-2 border-black bg-emerald-300 py-2">
                            {row.location}</td>

                        {hourly_sales.map((cell=>{
                            return (<td className="border-2 border-black bg-emerald-300 py-2">
                                {cell}</td>);}))
                        }

                        <td className="border-2 border-black bg-emerald-300 py-2">
                            {hourly_sales.reduce((total, curr) => total += curr, 0)}
                        </td>

                    </tr>
                  );
              })
            }
            
            </tbody>

            <tfoot className="font-bold">
                <td className="border-2 border-black bg-emerald-600">Totals</td>

                {hourly_sales.map((cell=>{
                    return (<td className="border-2 border-black bg-emerald-600">
                        {cell * props.rows.length}</td>);}))
                }

                <td className="border-2 border-black bg-emerald-600">
                    {
                        hourly_sales.reduce((total, curr) => total += curr, 0) * props.rows.length
                    }
                </td>

            </tfoot>
            
        </table>
                
        </>
    )
}

export default ReportTable
