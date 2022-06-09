
function Main() {
  return (
    <>
    <div className="w-full bg-emerald-100 flex justify-center ">
      <form className="rounded-md	my-10 w-3/5 py-5 px-5 bg-emerald-400 text-black">
          <legend className="font-bold">
            Create Cookie Stand</legend>

          <div>
            <label>Location</label>
            <input type={"text"} placeholder={"Bercelona"}/>
          </div>

          <div>
            <label>Minimum Customers per hour</label>
            <input type={"number"} placeholder={"2"}/>
          </div>

          <div>
            <label>Maximum Customers per hour</label>
            <input type={"number"} placeholder={"4"}/>
          </div>

          <div>
            <label>Average Cookies per sale</label>
            <input type={"text"} placeholder={"2.5"}/>
          </div>

          <button>
            Create
          </button>
      </form>

      <p className="my-5 bg-emerald-100 text-black text-xl">
        Report table comming soon...</p>
      
      <p className="my-5 bg-emerald-100 text-black text-xl">
        Report </p>

    </div>
    </>
  )
}

export default Main

