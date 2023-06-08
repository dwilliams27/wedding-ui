import './App.css';
import TopBar from './components/TopBar';
import ContentContainer from './components/ContentContainer';

function App() {
  return (
    <div className="App">
      <TopBar />
      <ContentContainer>
        <p>
          Hello
        </p>
      </ContentContainer>
    </div>
  );
}

export default App;
