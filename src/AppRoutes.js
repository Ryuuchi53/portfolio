import React from 'react';
import { useRoutes } from 'react-router-dom';

import Home from './Home.js';
import About from './About.js';
import Project from './Project.js';
import Contact from './Contact.js';
import NoMatch from './NoMatch.js'; 

export default function AppRoutes() {

    const allRoutes = useRoutes([

        { path: "/portfolio", element: <Home/> },
        { path: "/about", element: <About/> },
        { path: "/contact", element: <Contact/> },
        { path: "/project", element: <Project/>,},
        { path: "/*", element: <NoMatch/>}

    ]);

    return allRoutes;

}