function LoginForm() {
  return(
    <div className="flex w-full flex items-center content-center justify-center">
        <form className="flex w-4/5 bg-emerald-200 flex items-center rounded-xl
        content-center justify-center flex-col border-emerald-700 border-4 my-10
        py-10">
            <label className="font-bold text-4xl m-5">
                Username</label>
            <input type="text" name="username" placeholder="username" 
            className="w-4/5 h-8 rounded-md p-5"/>

            <label className="font-bold text-4xl m-5">
                Password</label>
            <input type="password" name="password" placeholder="password" 
            className="w-4/5 h-8 rounded-md p-5"/>
            
            <input type="submit" value="Sign In" 
            className="font-bold text-2xl w-4/5 bg-emerald-500 mt-10
            h-16 rounded-xl"/>
        </form>
    </div>
  )
}

export default LoginForm
