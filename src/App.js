import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ApiComponent from './ApiComponent';
import NavBar from './NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <header className="App-header">
        <h1>Välkommen till min React App</h1>
        <p>Detta är startsidan.</p>
      </header> */}
      <ApiComponent/>
    </div>
  );
}

export default App;
