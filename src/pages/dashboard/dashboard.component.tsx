import React, { useEffect, useState } from "react";
import { SelectPicker } from 'rsuite';
import Sidebar from "../../components/Sidebar.component";
import Header from "../../components/Header.component";


//import data from "https://github.com/rsuite/rsuite/blob/master/docs/public/data/users-role.json"
const names = ["Alesandro Nunes Garcia",
                "Alicia Bingre Álvares",
                "Bruna Ataíde Moutinho",
                "Elisa Loio Castanheda",
                "Jacira Tavares Lamenha",
                "Jadson Abrantes Abelho",
                "João Felipe Moraes",
                "Luciana Aparecida da Silva",
                "Melany Simas Quinta",
                "Patrício Machado Anhaia",
                "Pietro Sanches Mourão",
                "Sancho Quintais Amoedo",
                "Simone Morgado Valadim",
                "Valdir Gimenez Carvalho",
                "Waldomiro Ribeiro dos Santos"
              ]

          
/*
type DataItemType = {
  value: string; // property value is the value of valueKey 
  label: React.Node; // property value is the vaue of labelKey
  children?: Array<DataItemType>; // property value is the value of childrenKey
  groupBy?: string;
};

const instance = <SelectPicker data={names} block />;
ReactDOM.render(instance);
*/

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
