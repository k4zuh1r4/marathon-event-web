import { useState, useEffect } from "react";
import axios from "axios";
import React from 'react';
import { CompetitorMainMenu } from "@/components/dashboard";
import { HeroPage } from "@/components/hero";
export const MainPage = () => {
  const [auth,setAuth] = useState(false)
  useEffect(() => {
    axios.get('http://localhost:8081').then((res) =>{
      if(res.data.Status === "Succeed") {
        setAuth(true)
      } else {
        setAuth(false)
        console.log(res.data.Error)
      }
    }).then((err) => console.log(err))
  })
  return (
  <>{auth ? <CompetitorMainMenu />:<HeroPage />}</>
  )
}
