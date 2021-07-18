import React from "react";
import { Dropdown } from "rsuite";
import * as S from "./Header.styles";

export interface IHeader {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarOpen: boolean;
}

function Header(props: IHeader) {
  const { sidebarOpen, setSidebarOpen } = props;

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-30">
      <div
        className="px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#21252b" }}
      >
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-gray-500 hover:text-gray-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center">
            <Dropdown
              title={<p style={{ color: "white" }}>Olá, Admin</p>}
              placement="bottomEnd"
              style={{ backgroundColor: "#21252b", color: "white" }}
              menuStyle={{ backgroundColor: "#21252b", color: "white" }}
              appearance="dark"
            >
              <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
                <p>Autenticado como</p>
                <strong>Administrador</strong>
              </Dropdown.Item>
              <S.DropdownButton onSelect={() => window.open("/", "_self")}>
               Sair
              </S.DropdownButton>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
