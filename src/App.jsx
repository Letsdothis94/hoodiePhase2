import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header' 
import ItemCollection from './components/ItemCollection'
import Cart from './components/Cart'
import IconCart from './components/IconCart'
import Checkout from './components/Checkout'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import ThankYou from './pages/ThankYou'
import Favorites from './components/Favorites'
import './App.css'

function App() {
  const [hoodies, setHoodies] = useState([])
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    let request = async () => {
      let req = await fetch(`http://localhost:3000/hoodies`)
      let res = await req.json()
      setHoodies(res)
    }
    request()
  }, [])

  const add = (hoodie) => {
    console.log("adding to cart")
    setCart([...cart, {...hoodie, id: cart.length + 1}])
    setTotal(0 + hoodie.price + total)
  }

  const remove = (item) => {
    console.log('remove')
    setCart([...cart.filter((hoodie) => {return hoodie.id !== item.id})])
    setTotal(total - item.price - 0)
  }

  const loveIt = (hoodie) => {
    console.log('favorite')
    if(favorites.includes(hoodie)) return;
    setFavorites([...favorites, hoodie])
  }

  const add2 = (fav) => {
    console.log('adding')
    setCart([...cart, {...fav}])
    setTotal(0 + fav.price + total + 0)
  }

  const notLove = (fav) => {
    console.log('dont like it anymore')
    setFavorites([...favorites.filter((hoodie) => {return hoodie.id !== fav.id})])
  }

  const emptyBag = () => {
        console.log('emptying-bag')
      setCart([])
      setTotal(0)
  }



  return (
    <Router>
        <div>
        <Routes>
          <Route exact path='/' element={
            <>
              <Header />
              <IconCart />
              <ItemCollection hoodies={hoodies} add={add} total={total} loveIt={loveIt}/>
              <Footer />
            </>
          }>
          </Route>
          <Route exact path='/Cart' element={
            <>
              <Header />
              <Cart cart={cart} total={total} remove={remove}/>
              <Footer />
            </>
          }>
          </Route>
          <Route exact path='/Checkout' element={
            <>
            <Header />
              <Checkout total={total} emptyBag={emptyBag} />
            <Footer />
            </>
          }>
          </Route>
          <Route exact path='/AboutUs' element={
            <>
            <Header />
            <AboutUs />
            <Footer />
            </>
          }>
          </Route>
          <Route exact path='/ContactUs' element={
            <>
              <Header />
              <ContactUs />
              <Footer />
            </>
          }>
            </Route>
            <Route exact path='/ThankYou' element={
              <>
                <Header />
                <ThankYou />
                <Footer />
              </>
            }>
            </Route>
            <Route exact path='/Favorites' element={
              <>
                <Header />
                <IconCart />
                <Favorites favorites={favorites} notLove={notLove} add2={add2}/>
                <Footer />
              </>
            }>  
            </Route>
        </Routes>
        </div>
    </Router >
  )
}

export default App
