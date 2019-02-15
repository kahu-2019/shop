import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import Form from './Form'
import Listings from './Listings'
import Cart from './cart'

class App extends React.Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return (
        <Router>
            <div>
                <Header />
            {/* < Form /> */}
            <Listings />
            <Cart />
          </div>
        </Router>
    )
  }
}


export default App

