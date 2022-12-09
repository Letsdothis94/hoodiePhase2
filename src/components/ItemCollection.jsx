import react from 'react';
import ItemCard from './ItemCard';

function ItemCollection({ hoodies, add, loveIt }) {
    return (
        <div className="collection">
            {
                hoodies.map((hoodie) => {
                    return (
                        <div className='cardMap'>
                            <ItemCard hoodie={hoodie} add={add} loveIt={loveIt} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemCollection;