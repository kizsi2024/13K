import React, { useState} from 'react';
import './App.css';
import Person from './Person/Person';


  const App = props =>{
    const[aktualisState,ujState] = useState({
      persons: [
        {name:"hubele balazs",age:"26"},
        {name:"jani",age:"58"},
        {name:"kocka karesz",age:"20"}
      ],
      otherState: "ez egy masik allapot"
    })
  
  
  const nameChangeHansler = ()=>{
    //console.log(this.state)
    ujState({
      persons:[
        {name:"hubele balazs",age:"26"},
        {name:"jani",age:"58"},
        {name:"kocka karcsi",age:"40"}
      ],
      otherState: "ez egy masik allapot"
    })
    //console.log(this.state)
  }
  
    return (
      <div className='App'>
        <h1>React feladatok</h1>
        <p>Ez egy bkezdes</p>
        <button onClick={nameChangeHansler}>nevet modosit</button>
        <Person name={aktualisState.persons[0].name} age={aktualisState.persons[0].age} />
        <Person name={aktualisState.persons[1].name} age={aktualisState.persons[1].age}/>
        <Person name={aktualisState.persons[2].name} age={aktualisState.persons[2].age}/>
      </div>
    )
    /*return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'React feladatok'))*/
    }

export default App;
