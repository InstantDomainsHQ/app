import React from "react";
import {useAuthContext} from "@/src/components/context/AuthContext";
import HeaderSignedIn from "@/src/components/nav/header-signed-in";
import HeaderSignedOut from "@/src/components/nav/header-signed-out";

export default function Header() {
  const {authUser} = useAuthContext()

  return (
      <>
        {authUser ? <HeaderSignedIn/> : <HeaderSignedOut/>}
      </>
  )
}
