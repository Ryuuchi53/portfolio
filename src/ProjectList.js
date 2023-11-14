
import { Link } from 'react-router-dom';

export default function ProjectLists () {

    let projectDetails = [
        { id: 'first-post', title : 'Cool ways to style a React app' },
        { id: 'second-post', title : 'Why React is better than Angular' },
        { id: 'third-post', title : 'Awesome libraries that React Dev use' },
    ];

    let listItems = projectDetails.map(post => 
        
        <li key={post.id}>

          {/* Add in an additional portion to the initial path
          corresponding to that of the parent Route Posts using Link
          This portion becomes the dynamic parameter of the route */}

          <Link to={`/project/${post.id}`}>
            {post.title}
          </Link>
            
        </li>);

    return <ul>{listItems}</ul>;

}