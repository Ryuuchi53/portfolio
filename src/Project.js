
import { Outlet } from 'react-router-dom';

export default function Posts() {
    return (
      <div className='container'>
        <h1>React Blog Posts</h1>
        <p>Updated posts on cool React features</p>
        {/* Any nested child route components will have their JSX 
        rendered in place of the Outlet element below */}
        <Outlet/>
      </div>
    );
  }