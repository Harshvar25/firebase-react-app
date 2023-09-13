import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";


export default function AuthDetails() {
    const [authUser , setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth , (user) =>{
            if(user){
                setAuthUser(user);
            }else{
                setAuthUser(null);
            }
        },[])

    })
  return (
    <div>
        {authUser ? <p>Signed In</p> : <p>Signed Out</p>}
    </div>
  )
}
