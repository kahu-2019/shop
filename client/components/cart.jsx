import React from 'react'
import {connect} from 'react-redux'

class Cart extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            items:[{
            name: 'tshirt', quantity:5}]}
    }

addItem(item) {
    store.dispatch({
        type: 'ADD_ITEM',
        item 
    
    })
}  

    render () {
    return <div className='cart'>
        <ul>
            {this.props.cart.map((item, i) => {
                return (
                    <li key={i}> {item.name} + {item.quantity}</li>

                )
            })}
            <li>
                <button onClick={() => this.addItem()}>hello</button>

            </li>
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
