import React from "react";
import Profile from "@/src/components/profile";
import DashboardContainer from "@/src/components/dashboard";

export default function UserProfile() {
  return (
        <DashboardContainer children={<Profile/>}/>
  )
}