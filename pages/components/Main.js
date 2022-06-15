
function Main({ handleSubmit, cookies }) {
  return (
    <>
    <div className="w-full bg-emerald-100 flex items-center content-center 
    justify-center flex-col">
      <form className="flex items-center justify-center flex-col rounded-md	
      my-10 w-4/5 py-10 px-10 bg-emerald-400 text-black font-bold"
      onSubmit={handleSubmit}>
          <legend className="col-span-4 text-3xl my-3">
            Create Cookie Stand</legend>

            <div className="flex items-center justify-center my-2 w-full">
              <label className="mx-2 my-2">Location</label>
              <input name="loc" className="w-4/5 h-full mx-2 my-2 bg-gray-200 rounded-md 
              shadow-md" 
              type={"text"} placeholder={"Bercelona"}/>
            </div>

            <div className="grid grid-cols-4 grid-rows-2 gap-1">
              <label className="mx-2 mt-2">Minimum Customers per hour</label>
              <label className="mx-2 mt-2">Maximum Customers per hour</label>
              <label className="mx-2 mt-2">Average Cookies per sale</label>
              
              <button className="row-span-2 bg-emerald-700 w-full	
              h-full">Create</button>  

              <input name="min" className="mx-2 mb-2 h-fit" type={"number"} placeholder={"2"}/>
              <input name="max" className="mx-2 mb-2 h-fit" type={"number"} placeholder={"4"}/>
              <input name="avg" className="mx-2 mb-2 h-fit" type={"text"} placeholder={"2.5"}/>
            </div>
      </form>

      <p className="my-4 bg-emerald-100 text-black text-xl">
        Report table comming soon...</p>
      
      <p className="my-4 bg-emerald-100 text-black text-xl">
        {cookies} </p>
 
    </div>
    </>
  )
}

export default Main

