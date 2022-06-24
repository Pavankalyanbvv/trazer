import './App.css';
import Header from './components/header';
import Dashboard from'./components/dashboard';
import Count from './components/count';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Dashboard/>
        <div className="others">
        <div className='content'>
        <Count/>
      </div>
    </div>
    </div>
    </div>
  );
}
export default App;
