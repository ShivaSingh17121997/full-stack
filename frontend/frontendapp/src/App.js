import './App.css';
import { Navbar } from './Components/Navbar';
import { MainRoutes } from './Components/MainRoutes';
import { Home } from './Pages/Home';

function App() {
  return (
    <div className="App">
      <MainRoutes/>
      <Navbar />
      
    </div>
  );
}

export default App;
