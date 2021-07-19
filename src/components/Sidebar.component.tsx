import React, { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Nav } from "rsuite";
import * as S from "./Sidebar.styles";

const IconsPrimaryColor= "white";
const IconsSecondaryColor="grey";

export interface ISidebar {
  setSurveyIndex?: React.Dispatch<React.SetStateAction<number>>;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  surveyIndex?: number;
  sidebarOpen: boolean;
}

function Sidebar(props: ISidebar) {
  const { setSurveyIndex, surveyIndex, setSidebarOpen, sidebarOpen } = props;
  const location = useLocation();
  const { pathname } = location;
  const page = pathname.split("/")[1];

  const trigger = useRef(null);
  const sidebar = useRef(null);

  // close on click outside
  useEffect(() => {
    // @ts-ignore
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      // @ts-ignore
      if (!sidebarOpen ||sidebar.current.contains(target) ||trigger.current.contains(target))
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    // @ts-ignore
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="lg:w-64">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        style={{ backgroundColor: "#29313C" }}
        id="sidebar"
        className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-green-900 p-4 transition-transform duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            aria-controls="sidebar"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink exact to="/" className="block">
            <div className="flex flex-grow">
              <h1
                className="text-2xl"
                style={{ color: "white", verticalAlign: "middle" }}
              >
                Performance Portal
              </h1>
            </div>
          </NavLink>
        </div>

        {/* Links */}
        <div>
          <ul className="mt-3">
            <li
              style={page === "dashboard" ? {backgroundColor: "#1675e0"} : {}}
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                page === "dashboard" && "bg-gray-900"
              }`}
            >
              <NavLink
                exact
                to="/dashboard"
                className={`block text-gray-200 hover:text-white transition duration-150 ${
                  page === "dashboard" && "hover:text-gray-200"
                }`}
              >
                <div className="flex flex-grow">
                  <svg
                    className="flex-shrink-0 h-6 w-6 mr-3"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      style={page === "dashboard" ? {color: IconsPrimaryColor} : {}}
                      className={`fill-current text-gray-900 ${
                        page === "dashboard" && "text-green-400"
                      }`}
                      cx="18.5"
                      cy="5.5"
                      r="4.5"
                    />
                    <circle
                      style={page === "dashboard" ? {color: IconsSecondaryColor} : {}}
                      className={`fill-current text-gray-800 ${
                        page === "dashboard" && "text-green-600"
                      }`}
                      cx="5.5"
                      cy="5.5"
                      r="4.5"
                    />
                    <circle
                      style={page === "dashboard" ? {color: IconsSecondaryColor} : {}}
                      className={`fill-current text-gray-800 ${
                        page === "dashboard" && "text-green-600"
                      }`}
                      cx="18.5"
                      cy="18.5"
                      r="4.5"
                    />
                    <circle
                      style={page === "dashboard" ? {color: IconsPrimaryColor} : {}}
                      className={`fill-current text-gray-900 ${
                        page === "dashboard" && "text-green-400"
                      }`}
                      cx="5.5"
                      cy="18.5"
                      r="4.5"
                    />
                  </svg>
                  <span className="text-sm font-medium">Dashboard</span>
                </div>
              </NavLink>
            </li> 
            {setSurveyIndex && <>
            <li
              style={page === "avaliacao" ? {backgroundColor: "#1675e0"} : {}}
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                page === "avaliacao" && "bg-gray-900"
              }`}
            >
              
              <NavLink
                exact
                to="/avaliacao"
                className={`block text-gray-200 hover:text-white transition duration-150 ${
                  page === "avaliacao" && "hover:text-gray-200"
                }`}
              >
                <div className="flex flex-grow">
                  <svg
                    className="flex-shrink-0 h-6 w-6 mr-3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className={`fill-current text-gray-800 ${
                        page === "avaliacao" && "text-green-600"
                      }`}
                      d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z"
                    />
                    <path
                      style={page === "avaliacao" ? {color: IconsPrimaryColor} : {}}
                      className={`fill-current text-gray-800 ${
                        page === "avaliacao" && "text-green-600"
                      }`}
                      d="M1 1h22v23H1z"
                    />
                    <path
                    style={page === "avaliacao" ? {color: IconsSecondaryColor} : {}}
                      className={`fill-current text-gray-600 ${
                        page === "avaliacao" && "text-green-400"
                      }`}
                      d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z"
                    />
                  </svg>
                  <span className="text-sm font-medium">Avaliação</span>
                </div>
              </NavLink>
            </li>
            <li>
              <S.CustomNav vertical appearance="subtle" reversed activeKey={surveyIndex} onSelect={setSurveyIndex}>
                <Nav.Item eventKey={0}>
                Desempenho
                </Nav.Item>
                <Nav.Item eventKey={1}>
                Comportamento
                </Nav.Item>
                <Nav.Item eventKey={2}>
                  Habilidades sociais...
                </Nav.Item>
                
              </S.CustomNav>
            </li>
            </>}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
