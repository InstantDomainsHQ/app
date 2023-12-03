import React from "react";
import HeaderSignedOut from "@/src/components/nav/header-signed-out";

export default function Header() {
  return (
      <>
        <HeaderSignedOut/>
        {/*{authUser ? <HeaderSignedIn/> : <HeaderSignedOut/>}*/}
      </>
  )
}
