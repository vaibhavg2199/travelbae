import React from 'react'
import './Style/Destinations.css'
import Itly from './Itly';
import Tokyo from './Tokyo';
import Bali from './Bali';
import Rome from './Rome'
const Destinations = () => {
  return (
    <div className='dest'>
        <div className='dest1'>
            <h1>Explore Our Destinations</h1>
        </div>

        <div className='dest2'>
            <Itly/>
            <Tokyo/>
            <Bali/>
            <Rome/>
        </div>
    </div>
  )
}

export default Destinations