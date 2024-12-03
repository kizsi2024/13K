import logo from './logo.svg';
import './App.css';
import React, {Component } from 'react';
import Person from './Person/Person'


class App extends Component{
  state={
    persons: [
    {id: 'dsfss',name: "Valaki", age:28},
    {id: 'fasf',name: "Dr Lilla ", age:40},
    {id: 'aasdaaaas',name: "Papa", age:55}
    ],
    lathatosag: true
  }
  nameChangedHandler = (ujNev) => {
    this.setState(prevState => ({
      persons: prevState.persons.map((person, index) => 
        index === 0 ? {...person, name: ujNev} : person
      )
    }));
  }

nevValtozasHandler = (event, id) => {
  const szemelyIndex = this.state.persons.findIndex(aktSzemely => {
    return aktSzemely.id === id;
  });

const szemely = {...this.state.persons[szemelyIndex]};
  szemely.name = event.target.value;
  const szemelyek = [...this.state.persons];
  szemelyek[szemelyIndex] = szemely;

  this.setState({persons: szemelyek});
}



kapcsoloHandler = () =>{
  const lathato = this.state.lathatosag;
  this.setState({lathatosag: !lathato})
}

personDeleteHandler = (personIndex) => {
 //const persons = this.state.persons;
 //persons.splice(personIndex, 1);
 const szemelyek =[...this.state.persons];
 szemelyek.splice(personIndex,1);
 this.setState({persons: szemelyek});
}

render(){
  const stilus = {
    backgroundColor: 'green',
    font: 'inherit',
    border: '2px solid green',
    padding: '8px',
    cursor: 'pointer',
    color: 'white'
  };

  let persons = null
  if(this.state.lathatosag){
    persons = (
        <div>

      {
        this.state.persons.map((person, index) => {
          return <Person
          key={index}
          name={person.name}
          age={person.age}
          delete={() => this.personDeleteHandler(index)}
          change = {(event) => this.nevValtozasHandler(event, person.id)}
          />
         
        })
        
      }

        </div>
      )
      stilus.backgroundColor = 'red';
    } 
    return(  
    <div className='App'>
    <h1> React feladatok</h1>
    <p> Ez egy parapgrafus </p>
    <button style={stilus} onClick={this.kapcsoloHandler}>Láthatóság</button>
    {persons}
    </div>
    )
  
  }

}

export default App;


/*  
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





