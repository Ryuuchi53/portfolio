import { useParams } from 'react-router-dom';

export default function ProjectContent() {

    // We can use the useParams hook to retrieve the dynamic route parameter
    // passed from the Link in PostLists
    const { blogId } = useParams();


    // We hardcode this content for now. In a real life app
    // this could be retrieved from a backend service via
    // a REST API service when the app loads for the first time
    // or when this component is loaded
    let projectContent = [
      { id: 'first-post', title : 'Cool ways to style a React app', content : 'First you will need to set up your React App. The simplest appraoch to styling is to use inline styling. Alternatively, you can use a style object and share styles across multiple components. Finally you could use CSS modules or a CSS framework like React.' },

      { id: 'second-post', title : 'Why React is better than Angular', content: 'In terms of performance, bundle size, and backward compatibility, React outperforms Angular. The component-driven architecture of React allows developers to reuse code components, which tends to save cost and time. It also outperforms Angular due to its rendering optimizations and Virtual DOM implementation.' },

      { id: 'third-post', title : 'Awesome libraries that React Dev use', content: 'These libraries are Create React App, Material UI, Styled Components, MobX, Enzyme, Redux, React Virtualized, Redux Form, React DnD, React Intl, React Context, React Window, React Query, Zod ' },
    ];

    // Identify the post to show
    // based on matching the blogId dynamic route parameter
    // and the id in the post
    let foundPost = false;
    let postToShow = {};
    for (let post of projectContent) {
      if (post.id === blogId) {
        foundPost = true;
        postToShow = post;
        break;
      }
    }

    if (!foundPost) {
      postToShow = {title: 'That blog post does not exist', content : 'PLease return to the main blog page and try again'};

    }

    return (
      <>
        <h3>{postToShow.title}</h3>
        <p>{postToShow.content}</p>
      </>
    );
}