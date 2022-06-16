import CookieStandAdmin from './components/CookieStandAdmin'
import LoginForm from './components/LoginForm'

import {useState, useEffect} from 'react'
import axios from 'axios';

function Home() { 
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function loginHandler(e) {
    e.preventDefault();
    const userInfo = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    console.log(userInfo);

    if (userInfo.username.length != 0 && userInfo.password.length != 0) {
      // setIsLoggedIn(true);
      // console.log(isLoggedIn);

    } else {
      alert("Fill all required fields !!");
    }

    // userInfo.username.length != 0 && userInfo.password.length != 0 ?
    // setIsLoggedIn(true) :
    // alert("Fill all required fields !!");
  }


  return(
    <>
    {
      isLoggedIn ?
      (<CookieStandAdmin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>) :
      (<LoginForm loginHandler={loginHandler}/>)
    }
    </>
  )
}

export default Home
