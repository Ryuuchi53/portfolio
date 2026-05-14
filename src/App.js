import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Footer.js";
import AppRoutes from './AppRoutes.js';
import Typing from "./TypingText.js";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "@fontsource/karla";
import "@fontsource/dancing-script";
import "@fontsource/major-mono-display";
import "@fontsource/open-sans";
import "@fontsource/orbitron";
import "@fontsource/pacifico";
import { NavLink } from 'react-router-dom';

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
            <Typing />
          </div>
        ) : (
          <>
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
                    <NavLink className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    } to="/" onClick={() => {
                      setIsNavExpanded(!isNavExpanded);
                      setIsOpen(!isOpen);
                    }}>Home</NavLink>
                  </li>
                  <li className='nav-list'>
                    <NavLink className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    } to="/about" onClick={() => {
                      setIsNavExpanded(!isNavExpanded);
                      setIsOpen(!isOpen);
                    }}>About me</NavLink>
                  </li>
                  <li className='nav-list'>
                    <NavLink className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    } to="/project" onClick={() => {
                      setIsNavExpanded(!isNavExpanded);
                      setIsOpen(!isOpen);
                    }}>Project</NavLink>
                  </li>
                  <li className='nav-list'>
                    <NavLink className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    } to="/contact" onClick={() => {
                      setIsNavExpanded(!isNavExpanded);
                      setIsOpen(!isOpen);
                    }}>Contact</NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            <AppRoutes />
            <Footer />
          </>
        )}
    </div>
  );
}