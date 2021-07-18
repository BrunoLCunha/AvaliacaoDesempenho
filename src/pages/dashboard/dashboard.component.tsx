import React, { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar.component";
import Header from "../../components/Header.component";

function Workers() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      </div>
    </div>
  );
}

export default Workers;
