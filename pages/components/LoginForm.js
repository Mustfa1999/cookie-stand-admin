import axios from "axios";
import { useState } from "react";

function LoginForm(props) {
    const [loading, setLoading] = useState(false)

    const loginHandler = async (e) => {
      e.preventDefault()
      setLoading(true)
  
      const userData = {
        username: e.target.username.value,
        password: e.target.password.value,
      }
  
      await axios.post("https://cookie-stand-v1.herokuapp.com/api/token/", userData)
        .then(res => {
          e.preventDefault()
          props.setToken(res.data.access)
          props.setIsLogged(true)
          localStorage.setItem("jwt", res.data.access)
          console.log(res.data.access)
        })
        .catch(e => {
          console.log("login error", e)
          props.setIsLogged(false)
        })
        .finally(() => {
          setLoading(false)
        })
    };

  return(
    <div className="flex w-full flex items-center content-center justify-center">
        <form onSubmit={() => loginHandler} className="flex w-4/5 bg-emerald-200 flex items-center rounded-xl
        content-center justify-center flex-col border-emerald-700 border-4 my-10
        py-10">
            <label className="font-bold text-4xl m-5">
                Username</label>
            <input required id="username" type="text" name="username" placeholder="username" 
            className="w-4/5 h-8 rounded-md p-5" defaultValue="admin"/>

            <label className="font-bold text-4xl m-5">
                Password</label>
            <input required id="password" type="password" name="password" placeholder="password" 
            className="w-4/5 h-8 rounded-md p-5" defaultValue="admin"/>

            <input type="submit" value="Sign In"
            className="font-bold text-2xl w-4/5 bg-emerald-500 mt-10
            h-16 rounded-xl hover:cursor-pointer"/>
        </form>
      
    </div>
  )
}

export default LoginForm
