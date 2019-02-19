import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import {fetchListings} from '../actions'

import Header from './Header'
import Form from './Form'
import Listings from './Listings'
import Cart from './cart'

class App extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchListings()
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

function mapDispatchToProps(dispatch) {
  return {
    fetchListings: () => {
      dispatch(fetchListings())
    }
  }
}

export default connect(undefined, mapDispatchToProps)(App)

