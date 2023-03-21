import './App.css';
import MainDash from './component/MainDash/MainDash';
import SideBar from './component/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <div className="glass">
        <SideBar />
        <MainDash />
        <div></div>
      </div>
    </div>
  );
}

export default App;
