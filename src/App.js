import {
  BrowserRouter as Router, Link 
} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import "./App.css";
import AppRoutes from './AppRoutes.js';

const style = {
  textDecoration: "none",
  display: "block",
  width: "100%",
  color: "black",
  padding: "1.5rem 0"
}

export default function App() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (

    <Router>
      <nav className='navigation'>
        <Link className='page-name' to="/portfolio">Portfolio</Link>
        <button className="hamburger" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
        </button>
        <div className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
          <ul>
            <li>
              <Link to="/portfolio" style={style}>Home</Link>
            </li>
            <li>
              <Link to="/about-me" style={style}>About me</Link>
            </li>
            <li>
              <Link to="/project" style={style}>Project</Link>
            </li>
            <li>
              <Link to="/contact" style={style}>Contact</Link>
            </li>
          </ul>
        </div>          
      </nav>
      <AppRoutes/>
    </Router>
  );
}