/*import logo from './logo.svg';
import './App.css';

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
      </header>
    </div>
  );
}

export default App;
*/



import React, {useState} from 'react'
import './App.css';
import Person from './Person/Person'

const App = props=> {
  const [aktualisState, ujState] = useState({
    persons: [
      {name: "Hübele Balázs", age: 26},
      {name: "János", age: 58},
      {name: "Kocka Karesz", age: 20}
    ],
    //otherState: "Ez egy másik állpot"
  })
  
  
    const nameChangeHandler = () => {
      //console.log(this.state)
      ujState({
        persons: [
          {name: "Hübele Balázs", age: 26},
          {name: "János", age: 34},
          {name: "Kocka Károly", age: 20}
        ]
      })
     //console.log(this.state)
    }
  
  
    return(
      <div className='App'>
        <h1>React feladatok</h1>
        <p>Ez egy bekezdés</p>
        <button onClick={nameChangeHandler}>Nevet módosit</button>
        <Person name={aktualisState.persons[0].name} age={aktualisState.persons[0].age}/>
        <Person name={aktualisState.persons[1].name} age={aktualisState.persons[1].age}/>
        <Person name={aktualisState.persons[2].name} age={aktualisState.persons[2].age}/>
      </div>
    )
  
}


export default App;



/*
import React, {Component} from 'react'
import './App.css';
import Person from './Person/Person'

class App extends Component{
  
    state = {
      persons: [
        {name: "Hübele Balázs", age: 26},
        {name: "János", age: 58},
        {name: "Kocka Karesz", age: 20}
      ]
    }

    nameChangeHandler = () => {
      this.setState({
        persons: [
          {name: "Hübele Balázs", age: 26},
          {name: "János", age: 34},
          {name: "Kocka Károly", age: 20}
        ]
      })
    }
  
  render() {
    return(
      <div className='App'>
        <h1>React feladatok</h1>
        <p>Ez egy bekezdés</p>
        <button onClick={this.nameChangeHandler}>Nevet módosit</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    )
  
  }
}

export default App;
*/