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
    const filteredModels = models.filter(model => {
      return model.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    this.setState({models:filteredModels})
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
