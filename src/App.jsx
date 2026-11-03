import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import SearchBox from './components/searchbar'
import Categories from './components/categories'
import Gallery from './components/gallery'

const App = () => {
  return (
  <>
  <div className='min-h-screen bg-[#101114]'>
   <Navbar />
   <Hero />
   <SearchBox />
   <Categories />
   <Gallery />
   </div>
  </>
  )
}

export default App;
