import React from "react";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <ul>
          <h5> Tech used to create this project</h5>
          <li>React</li>
          <li>Redux</li>
          <li>SQL</li>
          <li>MUI</li>
          <li>Chart js</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
