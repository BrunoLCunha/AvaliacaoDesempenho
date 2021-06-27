import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Sidebar({
  setSurveyIndex,
}) {

  const location = useLocation();
  const { pathname } = location;
  const page = pathname.split('/')[1];

  const trigger = useRef(null);

  return (
    <div className="lg:w-64">
      {/* Sidebar backdrop (mobile only) */}
      <div className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${'opacity-100'}`} aria-hidden="true"></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-green-900 p-4 transition-transform duration-200 ease-in-out ${'translate-x-0'}`}
      >

        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            aria-controls="sidebar"
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink exact to="/" className="block">
            <div className="flex flex-grow">
              <svg width="32" height="32" viewBox="0 0 32 32">
                <defs>
                  <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                    <stop stopColor="#005e4a" stopOpacity="0" offset="0%" />
                    <stop stopColor="#005e4a" offset="100%" />
                  </linearGradient>
                  <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                    <stop stopColor="#5effdc" stopOpacity="0" offset="0%" />
                    <stop stopColor="#5effdc" offset="100%" />
                  </linearGradient>
                </defs>
                <rect fill="#047857" width="32" height="32" rx="16" />
                <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z" fill="#02d3a6" />
                <path d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z" fill="url(#logo-a)" />
                <path d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z" fill="url(#logo-b)" />
              </svg>
              <h1 className="text-2xl uppercase font-semibold pl-3" style={{color:"white", verticalAlign: "middle"}}>Avaliador</h1>
            </div>
          </NavLink>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xs uppercase font-semibold text-gray-400 pl-3">Pages</h3>
          <ul className="mt-3">
          <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === '' && 'bg-gray-900'}`}>
              <NavLink exact to="/" className={`block text-gray-200 hover:text-white transition duration-150 ${page === '' && 'hover:text-gray-200'}`}>
                <div className="flex flex-grow">
                <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                    <circle className={`fill-current text-gray-900 ${page === '' && 'text-green-400'}`} cx="18.5" cy="5.5" r="4.5" />
                    <circle className={`fill-current text-gray-800 ${page === '' && 'text-green-600'}`} cx="5.5" cy="5.5" r="4.5" />
                    <circle className={`fill-current text-gray-800 ${page === '' && 'text-green-600'}`} cx="18.5" cy="18.5" r="4.5" />
                    <circle className={`fill-current text-gray-900 ${page === '' && 'text-green-400'}`} cx="5.5" cy="18.5" r="4.5" />
                  </svg>
                  <span className="text-sm font-medium">Início</span>
                </div>
              </NavLink>
            </li>
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'avaliacao' && 'bg-gray-900'}`}>
              <NavLink exact to="/avaliacao" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'avaliacao' && 'hover:text-gray-200'}`}>
                <div className="flex flex-grow">
                  <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                    <path className={`fill-current text-gray-800 ${page === 'avaliacao' && 'text-green-600'}`} d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z" />
                    <path className={`fill-current text-gray-800 ${page === 'avaliacao' && 'text-green-600'}`} d="M1 1h22v23H1z" />
                    <path className={`fill-current text-gray-600 ${page === 'avaliacao' && 'text-green-400'}`} d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z" />
                  </svg>
                  <span className="text-sm font-medium">Avaliação</span>
                </div>
              </NavLink>
            </li>
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'pg1' && 'bg-gray-900'}`}>
              <button onClick={() => setSurveyIndex(0)}>Pg 1</button>
            </li>
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'pg2' && 'bg-gray-900'}`}>
            <button onClick={() => setSurveyIndex(1)}>Pg 2</button>
            </li>
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'pg3' && 'bg-gray-900'}`}>
            <button onClick={() => setSurveyIndex(2)}>Pg 3</button>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;