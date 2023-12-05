import React from "react";
export default function Logo() {
  return (
      <div className="shrink-0">
        <a aria-current="page"
           className="hover:no-underline inline-flex justify-center align-middle"
           href="/"><img className="h-10 w-auto"
                         src="/assets/image/rocket.svg" alt=""/>
          <span className="font-bold inline-flex text-2xl px-2 pt-1 text-black hover:text-gray-600">
              InstantDomains
            </span></a>
      </div>
  )
}
