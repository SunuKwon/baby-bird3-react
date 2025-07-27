import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [ input, setInput ] = useState()
  const [ display, setDisplay ] = useState( '' )

  useEffect( () => {
    setDisplay( input || 'Question ?' )
  }, [ input ] )

  const handleChangeInput = ( e ) => {
    setInput( e.target?.value )
  }

  const handleClickButton = () => {
    setInput( '' )
  }

  return (
    <div className="App">
      <header
        className="App-header"
      >
        <img
          src={ logo }
          className="App-logo"
          alt="logo"
        />
        <div>
          { display }
        </div>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <input
            value={ input }
            onChange={ handleChangeInput }
          />
          <button onClick={ () => alert( `Your answer: ${ input }` ) }>enter</button>
          <button onClick={ handleClickButton }>clear</button>
        </div>
      </header>
    </div>
  );
}

export default App;
