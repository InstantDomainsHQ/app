import React from "react";
import Billing from "@/src/components/billing";
import DashboardContainer from "@/src/components/dashboard";

export default function Search() {
  return (
        <DashboardContainer children={<Billing/>}/>
  )
}