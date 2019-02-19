import React from 'react'
import {connect} from 'react-redux'

class Cart extends React.Component {
    render () {
      let {cart} = this.props
      let total = cart.reduce((acc,item) =>  {
        return acc + item.price * item.quantity
      }, 0)
      return <div className='cart'>
        <ul>
          {cart.map((item, i) => <li key={i}> {item.title} x {item.quantity}</li>)}
        </ul>
        Total: ${total}
      </div>
    }
}

export default connect(mapStateToProps)(Cart)

function mapStateToProps(state){
    return {
        cart: state.cart
    }
}
