import { Link } from 'react-router-dom'

function IconCart(){
    return(
        <div className='subheader' style={{border:'1px solid white', textAlign:'end'}}>
            <div className='navLink'>
                <Link to='/Favorites'>
                    <h3>Favorites</h3>
                </Link>
            </div>
            <div className='cartDiv'>
                <Link to='/Cart'>
                    <img className='bag' src='https://cdn-icons-png.flaticon.com/512/1409/1409997.png' />
                </Link>
            </div>
        </div>
    )
}

export default IconCart;