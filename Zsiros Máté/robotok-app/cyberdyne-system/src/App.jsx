import React, { Component } from 'react'
import './App.css'
import { models } from './models.js'
import TerminatorList from './components/terminator-list/terminator-list_component.jsx'
import SearchBox from './components/searchbox/searchbox_component.jsx'

class App extends Component{
  constructor() {
    console.log("constructor")
    super()
    this.state = {
      models: [],
      searchfield: ""
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => this.setState({models: users}))
  }

  render(){


    const filteredModels = this.state.models.filter(model => {
      return model.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    if(this.state.models.length === 0){
      return <h1>Betöltés folyamatban...</h1>
    }

    return(
      <div className='tc'>
        <h1 className='f1'>Terminátor modellek</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <TerminatorList models={filteredModels}/>
      </div>
    )
  }
}

export default App