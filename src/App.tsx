import './App.css';
import FloatingHeader from './components/FloatingHeader';
import ContentContainer from './components/ContentContainer';
import React from 'react';

function App() {
  return (
    <div className="App">
      <FloatingHeader>
        <div>
          Hello1
        </div>
      </FloatingHeader>
      <ContentContainer>
        <p>
          Hello
        </p>
      </ContentContainer>
    </div>
  );
}

export default App;
