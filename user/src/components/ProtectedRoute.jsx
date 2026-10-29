import React from 'react'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";
import axios from 'axios';

const ProtectedRoute = ({children}) => {
  const Navigate = useNavigate();
  const [user, setUser] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('access');
    if(token){
      // setUser(true);
      // console.log('token is present')
      // console.log(token)
      //check if access token is valid or not
      // if valid set user to true
      //if false use refresh token to get new access token and set user to true
      const {exp} = jwtDecode(token);
      if (exp*1000 < new Date().getTime()) {
        //use refresh token to get new access token
      }
      else{
        console.log(exp);
        setUser(true);
      }
    }
    else{
      setUser(false);
    }
  }, [])
  const refreshToken = async () => {
    try{
      const response = await axios.post('http://localhost:8000/api/token/refresh/', {
        refresh: localStorage.getItem('refresh')
      })
      localStorage.setItem('access', response.data.access);
      // localStorage.setItem('refresh', response.data.refresh);
      console.log('access token refreshed')
      setUser(true);
    }
    catch(error){
      setUser(false);
    }
  }
  if(user===null){
    return (
      <>
      <div>loading.....</div>
      </>
    );
  }
  return (
   <>
   {console.log(user)}
   {user ? children : <Navigate to="/login" />}
   </>
  )
}

export default ProtectedRoute
