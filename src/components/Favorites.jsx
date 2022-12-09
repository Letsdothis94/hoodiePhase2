import {Link} from 'react-router-dom'
function Favorites( { favorites, notLove, add2} ) {
    return (
        <div className='favDiv'>
            {
                favorites.map((fav) => {
                    return(
                        <div className="card" style={{ textAlign: 'center' }}>
                            <p>{fav.name}</p>
                            <img className='imgCard' src={fav.image} />
                            <p style={{ fontStyle: 'italic' }}>${fav.price}.00</p>
                            <button onClick={() => {add2(fav)}} className='buttonCard'>Add to cart</button>
                            <button onClick={() => {notLove(fav)}}>💔</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Favorites;