import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'; 
import Dropdown from './components/Dropdown';
import Square from './tictactoe/Square';
import Board from './tictactoe/Board';

function App() {
  return (
    <div >
      <Board />
    </div>
  );
}

export default App;
