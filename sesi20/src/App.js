import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Button from './components/button';
import { useState } from 'react';
import Counter from './components/counter';

function App() {

  // == stateless component sebelum React 16.8
// const [state, setState] = useStaet(initialValue)
  // const  [name, setName] = useState('Ika')
  // const [anotherName, setAnotherName] = useState('Devi')

  // function changeName(e){
  //   // console.log(e)
  //   // Cara 1: useState tambahan
  //   const OldName = name
  //   // setName('Devi')
  //   setName(anotherName)
  //   setAnotherName(OldName)

    // Cara 2: conditional
    // setName(name == 'Ika'? 'Devi' : 'Ika')
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {/* Edit <code>{name}</code> and save to reload. */}
        </p>
        {/* <Button name="Klik aja" /> */}
        {/* <Button name="Klik saya" /> */}
        {/* <button onClick={changeName}>Change name</button> */}
        <Header batch="2" logo={logo} />
        <Counter />
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
