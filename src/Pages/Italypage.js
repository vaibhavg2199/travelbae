import React from 'react'
import './Italypage.css'
const Italypage = () => {
    return (
        <div className='Italypage'>
            <div className='banner '>
                <h1>Italy</h1>
                <p>Explore the beauty of Italy</p>
            </div>

            <div className='main1'>
                <div className='div1'>
                    <h2>Welcome to Italy!</h2>
                    <p>Italy, a country in Southern Europe, is known for its rich history, art, culture, and cuisine. From the ancient ruins of Rome to the beautiful canals of Venice, Italy offers a diverse and enchanting experience for travelers.</p>
                </div>
                <div className='div2'>
                    <h2>Discover the Charm of Italian Cities</h2>
                    <div className='images'>
                        <div className='imagediv1'>
                            <img src='./rome.svg' alt='' />
                            <p>Explore the historic streets of Rome and marvel at iconic landmarks like the Colosseum and Vatican City.</p>
                        </div>
                        <div className='imagediv2'>
                            <img src='./venice.svg' alt='' />
                            <p>Experience the romantic atmosphere of Venice with its charming canals and historic architecture.</p>
                        </div>
                    </div>
                </div>
                <div className='div3'>
                    <h2>Savor Italian Cuisine</h2>
                    <p>Indulge in the delicious flavors of Italian cuisine, from authentic pasta and pizza to exquisite wines and gelato.</p>
                </div>
            </div>
        </div>
    )
}

export default Italypage