import logo from './logo.svg';
import './App.css';
import React from 'react';
import Thumbnail from './components/thumbnail.js';
import './App.css';





function App() {
  return (
    <div className="App">
      <Thumbnail
        image="https://via.placeholder.com/300x200"
        title="Sample Movie"
        description="This is a sample movie description."
      />
    </div>
  );
}

export default App;
