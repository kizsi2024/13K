import React, {Component} from 'react'
import './App.css'
import Person from './Person/Person'
import { eventWrapper } from '@testing-library/user-event/dist/utils';

class App extends Component{
  
    state = {      persons: [        
      {id: 'kutya',name: "Hübele Balázs", age: 26},
      {id: 'fallosz',name: "János", age: 58},
      {id: 'cikoria',name: "Kocka Karesz", age: 20}
      ],
      lathatosag:true
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

    nameValtozasHandler = (event,id) => {
      const szemelyIndex = this.state.persons.findIndex(aktSzemely =>{
        return aktSzemely.id === id
      })
    const szemely = {
      ...this.state.persons[szemelyIndex]
    }
    szemely.name = event.target.value
    const szemelyek = [...this.state.persons]
    szemelyek[szemelyIndex] = szemely
      this.setState({
        persons: szemelyek
      })
      /*this.setState({
        persons: [
          {id: 'kutya',name: event.target.value, age: 26},
          {id: 'fallosz',name: event.target.value, age: 34},
          {id: 'cikoria',name: event.target.value, age: 20}
        ]
      })*/
    }
    kapcsoloHandler = () =>{
      const lathato = this.state.lathatosag
      this.setState({lathatosag: !lathato})
    }
    personDeleteHandler = (personIndex) =>{

      const szemelyek = [...this.state.persons]
      szemelyek.splice(personIndex,1)
      this.setState({persons: szemelyek})
    }
  
  render() {

    const stilus = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '2px solid green',
      padding: '8px',
      cursor: 'pointer',
      color: 'white'
    }


    
        
        let persons = null
        if (this.state.lathatosag) {
          persons = (
        
            <div>
              {
                this.state.persons.map((person,index) =>{
                  return <Person
                  name = {person.name}
                  age = {person.age}
                  delete = {() => this.personDeleteHandler(index)}
                  key = {person.id}
                  change = {(event) => this.nameValtozasHandler(event,person.id)}
                  />
                })
              } 
            </div>
          )
          stilus.backgroundColor = 'red'
        }
        
        
      
    return(
      <div className='App'>
        <h1>Sziasztok</h1>
        <p>Ez egy paragraf</p>
        <button style={stilus} onClick={this.kapcsoloHandler}>Kapcsolo</button>
        {persons}
        </div>
        )
  
  }
}

export default App;