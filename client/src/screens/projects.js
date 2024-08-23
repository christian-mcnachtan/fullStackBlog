import React from 'react';

function Projects() {
  return (
    <div className="container mt-5">
      <h1>Our Projects</h1>
      <p className="lead">
        Here are some of the projects we have worked on. Each project demonstrates our expertise in full-stack development and our commitment to building high-quality web applications.
      </p>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text">Description of the first project.</p>
              
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">Description of the second project.</p>
              
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Project 3</h5>
              <p className="card-text">Description of the third project.</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;