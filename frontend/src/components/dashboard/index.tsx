import React, {ReactNode} from "react";

function DashboardContainer({ children }: { children: ReactNode }) {
  return (
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </div>
  )
}

export default DashboardContainer