import React from 'react'
import {connect} from 'react-redux'

import {getAllListings} from '../api'
import ListingPreview from './ListingPreview';

class Listings extends React.Component {
  render() {
    let {listings} = this.props
    return (<div className="container">
        {listings.map((listing, index) => 
            <ListingPreview key={index} id={listing.id} title={listing.title} image={listing.image} description={listing.description} price={listing.price} />
        )}
    </div>)
  }
}

function mapStateToProps(state) {
  return {
    listings: state.listings
  }
}


export default connect(mapStateToProps)(Listings)

