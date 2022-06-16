import CookieStandAdmin from './components/CookieStandAdmin'
import LoginForm from './components/LoginForm'
import {useState } from 'react'

function Home() { 
  const [token, setToken] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  return(
    <>
    {
      isLogged ?
      (<CookieStandAdmin setToken={setToken} setIsLogged={setIsLogged} token={token}/>) :
      (<LoginForm setToken={setToken} setIsLogged={setIsLogged}/>)
    }
    </>
  )
}

export default Home
