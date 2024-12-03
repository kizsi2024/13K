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

    nameValtozasHandler = (event) => {
      this.setState({
        persons: [
          {name: event.target.value, age: 26},
          {name: event.target.value, age: 34},
          {name: event.target.value, age: 20}
        ]
      })
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
      backgroundColor: 'efefef',
      font: 'inherit',
      border: '2px dashed red',
      padding: '8px',
      cursor: 'pointer'
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
                  />
                })
              } 
            </div>
          )
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