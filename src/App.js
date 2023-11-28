import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/featureA/HelloWorld';
import Counter from './components/featureA/Counter';
import Welcom from './components/featureA/Welcom';
import FormSubmit from './components/featureA/formSubmit'
import UserList from './components/featureA/UserList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <HelloWorld />
        </div>
        <div>
          <Counter />
        </div>
        <div>
          <Welcom name="haha" />
        </div>
        <div>
          <button onClick={()=>{console.log("test")}}>Click me!2</button>
        </div>
        <div>
          <FormSubmit />
        </div>
        <div>
          <h1>User List</h1>
          <UserList />
        </div>
      </header>
    </div>
  );
}

export default App;
