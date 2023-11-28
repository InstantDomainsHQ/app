import React from "react";
import SearchBox from "@/src/components/search";
import DashboardContainer from "@/src/components/dashboard";

export default function Dashboard() {
  return (
        <DashboardContainer children={<SearchBox/>}/>
  )
}