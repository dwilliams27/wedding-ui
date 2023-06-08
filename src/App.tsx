import './App.css';
import TopBar from './components/TopBar';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from './components/MainPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <TopBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
