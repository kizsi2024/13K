import React, { Component } from 'react'
import TerminatorList from './components/terminator-list/terminator-list.component'
import { models } from './models'
import SearchBox from './components/searchbox/searchbox.component'
import './App.css'

class App extends Component{
  constructor(){
    super()
    this.state = {
      models:models,
      searchfield: ''
    }
  }

  onSearchChange = (event)=> {
    this.setState({searchfield:event.target.value})
   
  }
  render(){
    return(
      <div className='tc'>
        <h1>Terminátor Modellek</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <TerminatorList models={this.state.models}/>
      </div>
    )
  }
  componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users").then((response)=>response.json()).then((users)=>this.setState({models:users}))
  }
}

/*function App() {
  
  return (
   <div className='tc'>
    <h1>Terminator Modellek</h1>
    <SearchBox/>
    <TerminatorList models={models}/>
   </div>
  )
}*/

export default App
