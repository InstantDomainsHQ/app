'use client'
import React from 'react';
import {usePathname, useRouter} from "next/navigation";
import {useAuthContext} from "@/src/components/context/AuthContext";

export default function RequireLogin({
  children,
}: {
  children: React.ReactNode;
}) {
  const {authUser} = useAuthContext()
  const router = useRouter()
  const pathname = usePathname()
  if (!authUser) {
    if (pathname.includes("/dashboard")) {
      router.push("/login")
    }
  }
  return (
    <>{children}</>
  );
}
