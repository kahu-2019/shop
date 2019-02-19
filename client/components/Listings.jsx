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
    console.log(this.state)
    return (<div className="container">
        {this.state.listings && (
            this.state.listings.map((listing, index) => <div key={index}>
            <ListingPreview id={listing.id} title={listing.title} image={listing.image} description={listing.description} price={listing.price} />
            </div>)
        )}
    </div>)
  }
}


export default Listings

