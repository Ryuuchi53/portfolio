import {
  BrowserRouter as Router, Link 
} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Footer.js";
import AppRoutes from './AppRoutes.js';
import Typing from "./TypingText.js";

export default function App() {

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='container'>
      {
        loading ? (
          <div className='loader-container'>
            {/* <div className='spinner'></div> */}
            <Typing/>
          </div>
        ) : (
          <Router>
            <nav className='navigation'>
              <a className='page-name' href='/portfolio'>Portfolio</a>
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
                    <Link className='nav-link' to="/about" onClick={() => {
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
        )}
    </div>
  );
}