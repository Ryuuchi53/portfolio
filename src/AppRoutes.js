import React from 'react';
import { useRoutes } from 'react-router-dom';

import Home from './Home.js';
import About from './About.js';
import Project from './Project.js';
import Contact from './Contact.js';
import NoMatch from './NoMatch.js'; 

export default function AppRoutes() {

    const allRoutes = useRoutes([

        { path: "/portfolio/", element: <Home/> },
        { path: "/portfolio/about", element: <About/> },
        { path: "/portfolio/contact", element: <Contact/> },
        { path: "/portfolio/project", element: <Project/>,},
        { path: "/portfolio/*", element: <NoMatch/>}

    ]);

    return allRoutes;

}