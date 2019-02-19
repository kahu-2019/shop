import React, {Fragment, Component} from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../actions'

class ListingPreview extends Component{
    render(){
        let {id, title, description, image, price} = this.props
        let item = {id, title, description, image, price}
        return (<Fragment>
              <div className='row'>
                  <div className='col'>
                      <img className='img-thumbnail' style={{height:'15vw'}} src={image} alt="Clock Image" />
                  </div>
                  <div className='col-9'>
                      <h3>{title}</h3>
                      <h6>{description}</h6>
                      <br />
                      <h5>{price}</h5>
                      <button onClick={() => this.props.addToCart(item)} className='btn btn-outline-primary float-right'>Add to cart</button>
                  </div>
            </div>
            <hr />
            </Fragment>
        )
    }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart(item) {
      dispatch(addToCart(item))
    }
  }
}

export default connect(undefined, mapDispatchToProps)(ListingPreview)
