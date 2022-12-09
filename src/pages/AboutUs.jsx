import{ Link } from 'react-router-dom'

function AboutUs(){
    return(
        <div className='divAbout'>
            <h2 className='h2About'>About Us</h2>
            <p className='pAbout'>I'm baby asymmetrical marfa truffaut ugh mlkshk id sriracha. 
                Organic food truck sunt, vinyl chicharrones edison bulb man bun vice beard. 
                Distillery esse 8-bit pitchfork chambray fam. Artisan meh gastropub mixtape occaecat, 
                sartorial keytar hexagon copper mug polaroid.

                Locavore gatekeep meh cornhole slow-carb do qui roof party praxis cillum cardigan. 
                Cold-pressed vinyl 8-bit keffiyeh, blue bottle deep v poke lomo nisi exercitation lo-fi. 
                In roof party fingerstache you probably haven't heard of them blog ethical freegan cardigan affogato air plant. 
                Normcore cronut ut dolore taiyaki, direct trade aliquip. Adaptogen austin locavore adipisicing. 
                Deserunt try-hard shoreditch, godard chartreuse forage vice irony.

                Quinoa messenger bag sint meggings four loko cillum veniam. 
                Occupy flexitarian mixtape minim fam tumeric, 
                master cleanse reprehenderit DIY XOXO green juice wayfarers sunt gentrify. 
                Copper mug hammock biodiesel hexagon. 
                Nisi shaman kinfolk, nulla pug lorem tempor street art raclette wolf whatever quis quinoa vegan.</p>
                <>
                <Link to='/'>
                    <h4 className='homeAbout'>Home🧥</h4>
                </Link>
                </>
        </div>

    )
}
export default AboutUs;