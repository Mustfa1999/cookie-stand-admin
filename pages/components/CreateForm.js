function CreateForm(props) {
    return (
      <>
      <div className="w-full bg-emerald-100 flex items-center content-center 
      justify-center flex-col">
        <form className="flex items-center justify-center flex-col rounded-md	
        my-10 w-4/5 py-10 px-10 bg-emerald-400 text-black font-bold"
        onSubmit={props.handleSubmit}>
            <legend className="col-span-4 text-3xl my-3">
              Create Cookie Stand</legend>
  
              <div className="flex items-center justify-center my-2 w-full bg-emerald-300 mb-6">
                <label className="mx-2 my-2">Location</label>
                <input name="loc" className="w-4/5 h-full mx-2 my-2 bg-gray-200 rounded-md 
                shadow-md" 
                type={"text"} placeholder={"Bercelona"} value="Bercelona"/>
              </div>
  
              <div className="grid grid-cols-4 grid-rows-2 gap-1">
                <label className="mx-2 mt-2 bg-emerald-300">Minimum Customers per hour</label>
                <label className="mx-2 mt-2 bg-emerald-300">Maximum Customers per hour</label>
                <label className="mx-2 mt-2 bg-emerald-300">Average Cookies per sale</label>
                
                <button className="row-span-2 bg-emerald-700 w-full	h-full"
                type="submit">Create</button>  
  
                <input name="min" value="0" className="mx-2 mb-2 h-fit" type={"number"} placeholder={"2"}/>
                <input name="max" value="100" className="mx-2 mb-2 h-fit" type={"number"} placeholder={"4"}/>
                <input name="avg" value="50" className="mx-2 mb-2 h-fit" type={"text"} placeholder={"2.5"}/>
              </div>
        </form>
  
      </div>
      </>
    )
  }
  
export default CreateForm
  
  