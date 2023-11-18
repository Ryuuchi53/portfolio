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
    }, 1670);
  }, []);
  const [isOpen, setIsOpen] = useState(false);

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
              <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={() => {
                setIsOpen(!isOpen);
                setIsNavExpanded(!isNavExpanded);
                }}>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className={
                isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
              }>
                <ul className='u-list'>
                  <li className='nav-list'>
                    <Link className='nav-link' to="/portfolio" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
                setIsOpen(!isOpen);
              }}>Home</Link>
                  </li>
                  <li className='nav-list'>
                    <Link className='nav-link' to="/about" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
                setIsOpen(!isOpen);
              }}>About me</Link>
                  </li>
                  <li className='nav-list'>
                    <Link className='nav-link' to="/project" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
                setIsOpen(!isOpen);
              }}>Project</Link>
                  </li>
                  <li className='nav-list'>
                    <Link className='nav-link' to="/contact" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
                setIsOpen(!isOpen);
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