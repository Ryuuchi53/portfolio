
import { useRoutes } from 'react-router-dom';

import Home from './Home.js';
import About from './AboutMe.js';
import Contact from './Contact.js';
import NoMatch from './NoMatch.js';
import Project from './Project.js';
import ProjectList from './ProjectList.js';
import ProjectContent from './ProjectContent.js';    

export default function AppRoutes() {

    const allRoutes = useRoutes([

        { path: "/portfolio", element: <Home/> },
        { path: "/about-me", element: <About/> },
        { path: "/contact", element: <Contact/> },

        { path: "/project", 
          element: <Project/>,
          children: [
            { index: true, element: <ProjectList/> },
            { path: ":blogId", element: <ProjectContent/> }
          ],
        },

        { path: "*", element: <NoMatch/>}

    ]);

    return allRoutes;

}