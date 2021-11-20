import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet';
import Message from './components/Message';
import Button from './components/Button';

//jsx - js xml
//react not a framework!
//angular.vue

import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Greet name = "Peter" heroName = "Spiderman">
         <p>This is a props children</p>
         <Greet name = "Question Mark" heroName = "Something Man"></Greet>
        </Greet>
        <Message/>
        <Greet name = "Tony" heroName = "Iron man"/>
        <Button/>
        <Greet name = "Thor" heroName = "Thor"/>
        <a
          className="App-link"
          href="https://www.pinterest.ph/pin/650559108669350291/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Matutong mag React
        
        </a>
      </header>
    </div>
  );
}

export default App;