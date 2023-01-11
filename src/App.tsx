import React from 'react';
import logo from './logo.svg';
import './App.css';
import FloatingHeader from './components/FloatingHeader';
import ContentContainer from './components/ContentContainer';

function App() {
  return (
    <div className="App">
      <FloatingHeader />
      <ContentContainer>
        <p>
          Hello
        </p>
      </ContentContainer>
    </div>
  );
}

export default App;
