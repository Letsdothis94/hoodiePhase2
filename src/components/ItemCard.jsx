import React from 'react';
import Popup from 'reactjs-popup';


function ItemCard({ hoodie, add, loveIt }) {
    return (
        <div className="card" style={{textAlign:'center'}}>
            <p>{hoodie.name}</p>
            <img className='imgCard' src={hoodie.image} />
            <p style={{fontStyle: 'italic'}}>${hoodie.price}.00</p>
            <button onClick={() => { loveIt(hoodie) }}>💟</button>
                <Popup
                    trigger={open => (<button className="buttonCard">Rating</button>)}
                    position="right bottom" closeOnDocumentClick>
                    <span style={{backgroundColor: 'gray'}}> {hoodie.description}</span>
                </Popup><br />
            <button className='buttonCard' onClick={() => { add(hoodie) }}>Add to cart</button>
        </div>
    )
}
export default ItemCard;