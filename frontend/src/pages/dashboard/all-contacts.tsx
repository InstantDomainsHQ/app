import React, {useEffect, useState} from "react";
import ListView from "@/src/components/list";
import {useAuthContext} from "@/src/components/context/AuthContext";
import {EmailSearchResult} from "@/src/codegen";
import {getAllContacts} from "@/src/components/utils/server-utils";
import DashboardContainer from "@/src/components/dashboard";

export default function AllEmails() {
  const {authUser} = useAuthContext()
  const [emails, setEmails] = useState<Array<EmailSearchResult>>([])

  useEffect(() => {
    getAllContacts(authUser).then(result => {
      setEmails(result.results)
    })
  }, [!!authUser])

  return (
        <DashboardContainer children={<ListView emails={emails}/>}/>
  )
}