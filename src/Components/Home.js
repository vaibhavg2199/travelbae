import React from 'react'
import './Style/Home.css';
import Itly from './Itly';
import Tokyo from './Tokyo';
import Bali from './Bali';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const handleclick = () => {
        navigate('/destinations')
    }
    return (
        <div className='home-container'>
            <div className='home '>
                <h1>Welcome to TravelBae</h1>
                <p>Explore exciting destinations with us</p>
            </div>
            <div className='cards'>
                <div className='cards-h1'><h2>Featured Destinations</h2></div>
                <div className='cards-name'>
                    <Itly />
                    <Tokyo />
                    <Bali />
                </div>

                <div className='discover'>
                    <h2>Discover More</h2>
                    <p>Explore our handpicked destinations and create memories that last a lifetime.</p>
                    <Button variant="primary" onClick={handleclick}>View All Destinations</Button>
                </div>
            </div>
        </div>
    )
}

export default Home