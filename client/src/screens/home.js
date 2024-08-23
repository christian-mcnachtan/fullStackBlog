import React from 'react';

function Home() {
  return (
    <div className="container mt-5">
      <div className="jumbotron text-center">
        <h1 className="display-4">Welcome to Full Stack Blog</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a className="btn btn-primary btn-lg" href="/projects" role="button">Check out our projects</a>
      </div>
    </div>
  );
}

export default Home;