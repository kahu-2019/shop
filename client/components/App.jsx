import React from 'react'
import Form from './Form'

class App extends React.Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="App"/>
          < Form />
        <div/>
      </React.Fragment>
    )
  }
}


export default App

