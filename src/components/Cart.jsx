import React from 'react';
import { Link } from 'react-router-dom'
import Favorites from './Favorites';

function Cart({ cart, total, remove }) {
    return (
        <div className='cartBag'>
            {
                cart.map((item) => {
                    return (
                        <div className='divItemCart'>
                            <div className='divItemImg'>
                                <img className='bagpic' src={item.image} />
                            </div>
                            <div className='divItemInfo'>
                                <button className='xBtn' onClick={()=>{remove(item)}}>x</button>
                                <h3>{item.name}</h3>
                                <p style={{fontStyle: 'italic'}} >{item.descriptionHeader}</p>
                                <p>{item.description}</p>
                                <p style={{fontStyle: "italic"}}>${item.price}.00</p>
                            </div>
                        </div>
                    )
                })
            }
            <div>
                <h5>Total: ${total}.00 </h5>
                <Link to='/Checkout'>
                    <button>Checkout</button>
                    <h1>💵</h1>
                </Link>
            </div>
        </div>
    )
}
export default Cart;