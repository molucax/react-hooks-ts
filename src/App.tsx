import './App.css';
import UseContext from './components/BasicHooks/UseContext';
import UseEffect from './components/BasicHooks/UseEffect';
import UseReducer from './components/AdditionalHooks/UseReducer';
import UseRef from './components/AdditionalHooks/UseRef';
import UseState from './components/BasicHooks/UseState';

function App() {
  return (
    <div className="App">
      <h1>useRef</h1>
      <UseRef />
      <h1>useReducer</h1>
      <UseReducer />
      <h1>useContext</h1>
      <UseContext />
      <h1>useEffect</h1>
      <UseEffect />
      <h1>useState</h1>
      <UseState />
    </div>
  );
}

export default App;
