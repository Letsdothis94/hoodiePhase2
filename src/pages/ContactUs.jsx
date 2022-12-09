import { useState } from 'react';
import { Link } from 'react-router-dom'

function ContactUs(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        alert('Thank you, have a good day!')
        setFirstName('')
        setLastName('')
        setEmail('')
        setMessage('')
    }

    return(
        <div className='divContact'>
            <div>
                <div style={{ textAlign: 'center' }}>
                    <h5>GOT A QUESTION?</h5>
                    <h4>Contact Hoodies.com</h4>
                    <p>We're here to help and answer any question you might have.</p>
                    <p>🙂</p>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>First Name</label>
                        <input type="text" name="name" value={firstName} onChange={event => setFirstName(event.target.value)} />
                        <label>Last Name</label>
                        <input type="text" name="Lname" value={lastName} onChange={event => setLastName(event.target.value)}/>
                        <label>Email</label>
                        <input type="email" name="email" value={email} onChange={event => setEmail(event.target.value)} />
                        <label>Message</label>
                        <input type="text" name="message" value={message} onChange={event => setMessage(event.target.value)} />
                        <input type="submit" value="Send Message" />
                    </form>
                </div>
            </div>
        <>
            <Link to='/'>
                <h4 className='h4Contact'>Home🧥</h4>
            </Link>
        </> 
        </div>
    )
}

export default ContactUs;