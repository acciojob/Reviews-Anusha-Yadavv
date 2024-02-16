{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */}

import React from 'react';
import Review from './Review';
import './App.css'; 

function App() {
  return (
    <div className="container">
      <h2 id="review-heading">Our Reviews</h2>
      <main>
        <Review />
      </main>
    </div>
  );
}

export default App;
