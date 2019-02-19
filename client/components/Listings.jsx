import React from 'react'
import {getAllListings} from '../api'
import ListingPreview from './ListingPreview';

class Listings extends React.Component {
  constructor(props){
    super(props)

    this.state = {
        listings: undefined
    }
  }

  componentDidMount(){
    getAllListings()
        .then(newListings => {
            this.setState({listings: newListings})
        })
  }
  
  render() {
    let {listings} = this.state
    return (<div className="container">
        {listings && (
            listings.map((listing, index) => 
            <ListingPreview key={index} id={listing.id} title={listing.title} image={listing.image} description={listing.description} price={listing.price} />
            )
        )}
    </div>)
  }
}


export default Listings

