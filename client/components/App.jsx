import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Form from './Form'
import Listings from './Listings'

class App extends React.Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return (
        <Router>
            <div>
            {/* < Form /> */}
            <Route exact path='/listings' component={Listings} />
          </div>
        </Router>
    )
  }
}


export default App

