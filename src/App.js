import {
  BrowserRouter as Router, Link 
} from 'react-router-dom';
import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer.js";
import AppRoutes from './AppRoutes.js';

export default function App() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
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
          <ul className='u-list'>
            <li className='nav-list'>
              <Link className='nav-link' to="/portfolio" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>Home</Link>
            </li>
            <li className='nav-list'>
              <Link className='nav-link' to="/about-me" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>About me</Link>
            </li>
            <li className='nav-list'>
              <Link className='nav-link' to="/project" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>Project</Link>
            </li>
            <li className='nav-list'>
              <Link className='nav-link' to="/contact" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>Contact</Link>
            </li>
          </ul>
        </div>          
      </nav>
      <AppRoutes/>
      <Footer/>
    </Router>
  );
}