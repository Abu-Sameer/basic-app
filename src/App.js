import './App.css';
import MainDash from './component/MainDash/MainDash';
import RightSide from './component/RightSide/RightSide';
import SideBar from './component/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <div className="glass">
        <SideBar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
