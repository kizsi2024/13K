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


/*
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
    masikState: 'másik state'
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


export default App;*/




import React, {Component} from 'react'
import './App.css'
import Person from './Person/Person'
import { eventWrapper } from '@testing-library/user-event/dist/utils';

class App extends Component{
  
    state = {
      persons: [
        {name: "Hübele Balázs", age: 26},
        {name: "János", age: 58},
        {name: "Kocka Karesz", age: 20}
      ]
    }

    nameChangeHandler = (ujNev) => {
      this.setState({
        persons: [
          {name: ujNev, age: 26},
          {name: "János", age: 34},
          {name: "Kocka Károly", age: 20}
        ]
      })
    }

    nameValtozasHandler = (event) => {
      this.setState({
        persons: [
          {name: event.target.value, age: 26},
          {name: event.target.value, age: 34},
          {name: event.target.value, age: 20}
        ]
      })
    }
  
  render() {

    const stilus = {
      backgroundColor: 'efefef',
      font: 'inherit',
      border: '2px dashed red',
      padding: '8px',
      cursor: 'pointer'
    }


    return(
      <div className='App'>
        <h1>Sziasztok</h1>
        <p>Ez egy paragraf</p>
        <button style={stilus} onClick={this.nameChangeHandler.bind(this,'teszt')}>Nevet módosit</button>
        <Person
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.nameChangeHandler.bind(this,'Hübele Bazsi')}
          change={this.nameValtozasHandler}
          />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={() => this.nameChangeHandler('Csak Balázs')}
          change={this.nameValtozasHandler}
          />
          
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          change={this.nameValtozasHandler}
          />
          
      </div>
    )
  
  }
}

export default App;
