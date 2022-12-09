import { Link } from 'react-router-dom'

function Header(){
    return(
        <div className='header1' style={{border: '1px solid gray', textAlign: 'center'}}>
            <Link to='/'>
                <h1 className='title1'>Hoodies.com</h1>
            </Link>
        </div>
    )
}
export default Header;