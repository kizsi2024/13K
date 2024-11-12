import React, {useState} from 'react'
import './App.css'
import Person from './Person/Person'

const App = props => {
  const [aktualisState, ujState] = useState({
    people:[
      {name: "Kis Miklós", age: 13},
      {name: "Kis Tóni", age: 11},
      {name: "Kis Alajos", age: 16}
    ], //otherState: "Ez egy másik állapot"
  })

  

   const nameChangeHandler = () => {
    //console.log(this.state)
    ujState({
      people:[
        {name: "Kis Miklós", age: 23},
        {name: "A sztár, a legjobb, ", age: 21},
        {name: "A KIRÁLY", age: 26}
      ]
    })
    //console.log(this.state)
  }

  
    return (
      <div className='App'>
        <h1>React feladatok</h1>
        <p>Shrek 2</p>
        <button onClick={nameChangeHandler}>Nevet módosít</button>
        <Person name={aktualisState.people[0].name} age={aktualisState.people[0].age}/>
        <Person name={aktualisState.people[1].name} age={aktualisState.people[1].age}/>
        <Person name={aktualisState.people[2].name} age={aktualisState.people[2].age}/>Hobbim a gyűrűsférgek gyűjtése
      </div>
    )

    
  }

export default App;


/*
import React, {Component} from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component{

  state = {
    people:[
      {name: "Kis Miklós", age: 13},
      {name: "Kis Tóni", age: 11},
      {name: "Kis Alajos", age: 16}
    ]
  }

  nameChangeHandler = () => {
    this.setState({
      people:[
        {name: "Kis Miklós", age: 23},
        {name: "A sztár, a legjobb, ", age: 21},
        {name: "A KIRÁLY", age: 26}
      ]
    })
  }

  render(){
    return (
      <div className='App'>
        <h1>React feladatok</h1>
        <p>Shrek 2</p>
        <button onClick={this.nameChangeHandler}>Nevet módosít</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age}/>
        <Person name={this.state.people[1].name} age={this.state.people[1].age}/>
        <Person name={this.state.people[2].name} age={this.state.people[2].age}/>Hobbim a gyűrűsférgek gyűjtése
      </div>
    )

    
  }
}

export default App;
*/