import { Link } from 'react-router-dom'

function Footer(){
    return(
        <div className='footer1' style={{border: '1px solid darkblue'}}>
            <div className='socialMedia'>
                <a href="https://www.facebook.com/home.php">
                    <img src="https://cdn-icons-png.flaticon.com/128/1384/1384005.png" height='30px'/>
                </a>
                <a href="https://www.instagram.com/">
                    <img src="https://cdn-icons-png.flaticon.com/128/3670/3670274.png" height='30px' />
                </a>
                <a href="https://mail.google.com/">
                    <img src="https://cdn-icons-png.flaticon.com/128/6244/6244710.png" height='30px' />
                </a>
            </div>
            <div className='footerLinks'>
                <Link to='/AboutUs'>
                    <h4 className='icon'>About US</h4>
                </Link>
                <Link to='/ContactUs'>
                    <h4 className='icon'>Contact US</h4>
                </Link>
                <Link to='/'>
                    <h4 className='icon'>Home</h4>
                </Link>
            </div>
        </div>
    )
}
export default Footer;