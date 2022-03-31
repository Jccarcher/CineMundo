import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import image1 from '../images/1.jpg'
import image2 from '../images/2.jpg'
import image3 from '../images/3.jpg'
import image4 from '../images/4.jpg'
import image5 from '../images/5.jpeg'
import image6 from '../images/6.jpg'
import image7 from '../images/7.jpg'
import image8 from '../images/8.jpg'
import image9 from '../images/9.jpg'
import image10 from '../images/10.jpg'
import image11 from '../images/11.jpg'
import image12 from '../images/12.jpg'

// var Carousel = require('react-responsive-carousel').Carousel

const CarouselMovies = () => {
  return (
    <div className='col-md-6 mx-auto'>
      <Carousel className='carousel'>
        <div>
          <img src={image1} />
          <p className='legend'>The Batman</p>
        </div>
        <div>
          <img src={image2} />
          <p className='legend'>Spiderman: No way home</p>
        </div>
        <div>
          <img src={image3} />
          <p className='legend'>Uncharted</p>
        </div>
        <div>
          <img src={image4} />
          <p className='legend'>Encanto</p>
        </div>
        <div>
          <img src={image5} />
          <p className='legend'>Dune</p>
        </div>
        <div>
          <img src={image6} />
          <p className='legend'>Documental: Night on Earth </p>
        </div>
        <div>
          <img src={image7} />
          <p className='legend'>Documental: Blue Planet II</p>
        </div>
        <div>
          <img src={image8} />
          <p className='legend'>Serie:The Witcher</p>
        </div>
        <div>
          <img src={image9} />
          <p className='legend'>Serie: Rick and Morty</p>
        </div>
        <div>
          <img src={image10} />
          <p className='legend'>Serie: Grey's Anatomy</p>
        </div>
        <div>
          <img src={image11} />
          <p className='legend'>Serie:Better Call Saul</p>
        </div>
        <div>
          <img src={image12} />
          <p className='legend'>Serie: El Marginal</p>
        </div>
      </Carousel>
    </div>
  )
}
export default CarouselMovies
