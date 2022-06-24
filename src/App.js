import './App.css';
import Header from './components/header';
import Dashboard from'./components/dashboard';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Dashboard/>
        <div className="others">
          <speed />
          <count />
        </div>
      </div>
    </div>
  );
}
export default App;
