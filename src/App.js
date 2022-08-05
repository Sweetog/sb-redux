import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';

function App() {
    const counter = useSelector(state => state.counterReducer);
    const isLogged = useSelector(state => state.loggedReducer);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <header className="App-header">
                <h1>Counter: {counter}</h1>
                <button onClick={() => dispatch(increment())}>++Increment</button>
                <button onClick={() => dispatch(decrement())}>--Decrement</button>
                {isLogged ? <h3>Hello World</h3> : ''}
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
            </header>
        </div>
    );
}

export default App;
