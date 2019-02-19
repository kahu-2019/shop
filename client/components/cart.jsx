import React from 'react'
import {connect} from 'react-redux'

class Cart extends React.Component {
    render () {
      return <div className='cart'>
        <ul>
            {this.props.cart.map((item, i) => {
                return (
                    <li key={i}> {item.title} x {item.quantity}</li>
                )
            })}
        </ul>
      </div>
    }
}

export default connect(mapStateToProps)(Cart)

function mapStateToProps(state){
    return {
        cart: state.cart
    }
}
