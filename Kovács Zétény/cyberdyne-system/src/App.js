import logo from './logo.svg';
import './App.css';
import React, {Component } from 'react';
import Person from './Person/Person'


class App extends Component{
  state={
    persons: [
    {name: "Valaki", age:28},
    {name: "Dr Lilla ", age:40},
    {name: "Papa", age:55}
  ]
  }
  nameChangedHandler = (ujNev) => {
  
  this.setState({
    persons: [
      {name: ujNev, age:28},
      {name: "Dr Lilla ", age:40},
      {name: "Papa", age:55}
    ]
  })
  }
nevValtozasHandler =(event) =>{
  this.setState({
    persons: [
      {name:event.target.value, age:28},
      {name:event.target.value, age:40},
      {name:event.target.value, age:55}
    ]
  })
}

  render(){
    return (
      <div className='App'>
        <h1> React feladatok</h1>
        <p> Ez egy parapgrafus </p>
        <button onClick={this.nameChangedHandler.bind(this,'teszt')}>Nevet módosit</button>
        <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
        click={this.nameChangedHandler.bind(this, 'Hübele Bazsi')}
        change={this.nevValtozasHandler}
        />
        <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={()=>this.nameChangedHandler('Csak Balázs')}
        change={this.nevValtozasHandler}
        />
        <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}
        change={this.nevValtozasHandler}
        />
  
        VAlami Amit máté mondOT
      </div>
    )
  
}
}

export default App;


  
//console.log(this.state)


/*
const App = props =>{
  const[aktulisState, ujState] = useState({
    persons: [
      {name: "Vlaki", age:26},
      {name: "Lilla", age:10},
      {name: "Popi", age:50}
    ],
  //otherState = "Ez egy masik allapot"
  })



const nameChangedHandler = () => {
  //console.log(this.state);
  ujState({
    persons: [
      {name: "Valaki", age:28},
      {name: "Dr Lilla ", age:40},
      {name: "Papa", age:55}
    ]
  })
  //console.log(this.state)
}


return(
    <div className='App'>
      <h1> React feladatok</h1>
      <p> EZ egy bekezséd </p>
      <button onClick={nameChangedHandler}>Nevet módosit</button>
      <Person name={aktulisState.persons[0].name} age={aktulisState.persons[0].age}/>
      <Person name={aktulisState.persons[1].name} age={aktulisState.persons[1].age}/>
      <Person name={aktulisState.persons[2].name} age={aktulisState.persons[2].age}/>
      VAlami Amit máté mondOT
    </div>
)

    return React.createElement(
  'div', {className:'App'},
  React.createElement('h1', null, 'React feladatok  2.0')
)  )

}

*/





