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
*/



import React, {Component} from 'react'
import './App.css';
import Person from './Person/Person'

class App extends Component{
  
    state = {
      persons: [
        {id:'asd' ,name: "Hübele Balázs", age: 26},
        {id:'dsa' ,name: "János", age: 58},
        {id:'qwe' ,name: "Kocka Karesz", age: 20}
      ]
    }

    nameChangeHandler = (event,id) => {
      const szemelyIndex=this.state.persons.findIndex(aktSzemely=>{
        return aktSzemely.id===id;
      })
      const szemely ={
        ...this.state.persons[szemelyIndex]
      }
      szemely.name=event.target.value
      const szemelyek=[...this.state.persons]
      szemelyek[szemelyIndex]=szemely;
      this.setState({
        persons:szemelyek
      })
    }
    

    
kapcsoloHandler=()=>{
  const lathato =this.state.lathatosag
  this.setState({lathatosag: !lathato})
}
personDeleteHandler=(personIndex)=>{
  //const persons=this.state.persons
  //persons.splice(personIndex,1)
  const persons=[...this.state.persons]
  persons.splice(personIndex,1)
  this.setState({persons:persons})
}

render() {
  const stilus={
    backgroundColor:'green',
    font:"inherit",
    border:"2px solid green",
    padding: "8px",
    cursor:"pointer",
    color: "white"
  };
  let persons=null
  if (this.state.lathatosag) {
    persons=(
      <div>
        {
          this.state.persons.map((person,index)=>{
            return <Person
            name={person.name}
            age={person.age}
            delete={()=>this.personDeleteHandler(index)}
            key={person.id}
            change={(event)=>this.nameChangeHandler(event,person.id)}
            />
          })
          
        }
      </div>
      
    );
    stilus.backgroundColor="red"
  }
  return(
      <div className='App'>
        <h1>React feladatok</h1>
        <p>Ez egy bekezdés</p>
        <button style={stilus} onClick={this.kapcsoloHandler}>Nevet módosit</button>
        {persons}
      </div>
    )
  
  }
}

export default App;