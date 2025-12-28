"use client"
import { useEffect } from "react";
import { Landing } from "./component/Landing";
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from "@/utils/firebase";


export default function Home() {

  useEffect(() => {
    const unsub = onAuthStateChanged(auth , function(user) {
      if(user){
        console.log("This is the user: ", user)
      }else{
        console.log("There is no logged in user");
      }
    });

    return () => unsub()
  },[])

  return (
    <Landing />
  );
}
