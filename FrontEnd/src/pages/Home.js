import React from 'react'
import MovieList from '../components/MovieList'
import CarouselMovies from '../components/Carrousel'
import Footer from '../components/Footer'
import Frontlogo from '../components/Frontlogo'
const Home = () => {
  return (
    <main>
      <Frontlogo />
      <CarouselMovies />
      <MovieList />
      <Footer />
    </main>
  )
}

export default Home
