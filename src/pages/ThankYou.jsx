import {Link} from 'react-router-dom'

function ThankYou(){
    const src = "https://cdnl.iconscout.com/lottie/premium/thumb/delivery-truck-4973142-4133713.mp4"
    return(
        <div className='divThankYou'>
            <div className='thankyouMsg'>
                <h1>THANK YOU!</h1>
                <img src="https://media.tenor.com/MhCo1U8-d_cAAAAi/mail-delivery-dog.gif" />
                <h1>Your order is on the way...</h1>
            </div>

            <div className='divThankYou'>
                <Link to='/'>
                    <button className='buttonCard'>Keep Shopping</button>
                </Link>
            </div>
        </div>
    )
}
export default ThankYou;