function LoginForm(loginHandler) {
  return(
    <div className="flex w-full flex items-center content-center justify-center">
        <form onSubmit={() => loginHandler()} className="flex w-4/5 bg-emerald-200 flex items-center rounded-xl
        content-center justify-center flex-col border-emerald-700 border-4 my-10
        py-10">
            <label className="font-bold text-4xl m-5">
                Username</label>
            <input required id="username" type="text" name="username" placeholder="username" 
            className="w-4/5 h-8 rounded-md p-5" defaultValue="test"/>

            <label className="font-bold text-4xl m-5">
                Password</label>
            <input required id="password" type="password" name="password" placeholder="password" 
            className="w-4/5 h-8 rounded-md p-5" defaultValue="test"/>
            
            <input type="submit" value="Sign In" 
            className="font-bold text-2xl w-4/5 bg-emerald-500 mt-10
            h-16 rounded-xl hover:cursor-pointer"/>
        </form>
    </div>
  )
}

export default LoginForm
