import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'; 
import Dropdown from './components/Dropdown';
import Square from './tictactoe/Square';
import Game from './tictactoe/Board';

function App() {
  return (
    <div >
      <Game />
    </div>
  );
}

export default App;
