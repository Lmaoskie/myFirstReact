import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import NavBar from './components/NavBar';
import Employee from './components/Employee'
import Greet from './components/Greet';
import Message from './components/Message';
import Button from './components/Button';
import Router from '/components/Router';


//jsx - js xml
//react not a framework!
//angular.vue
//function

function App() {
  return (
    <div>
    <NavBar/>
    <Router/>
    </div>
  );
}

export default App;