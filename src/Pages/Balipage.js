import React from 'react'

const Balipage = () => {
  return (
    <div className='Italypage'>
    <div className='banner' style={{ backgroundColor:'#28a745'}}>
        <h1>Bali</h1>
        <p>Discover the Beauty of Bali</p>
    </div>

    <div className='main1'>
        <div className='div1'>
            <h2>Welcome to Bali!</h2>
            <p>Bali, an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs. Immerse yourself in the vibrant culture, lush landscapes, and spiritual ambiance of Bali.</p>
        </div>
        <div className='div2'>
            <h2>Explore Bali's Natural Wonders</h2>
            <div className='images'>
                <div className='imagediv1'>
                    <img src='./ubud.svg' alt='' />
                    <p>Visit the cultural heart of Bali in Ubud, surrounded by lush rice terraces and traditional crafts.</p>
                </div>
                <div className='imagediv2'>
                    <img src='./kuta.svg' alt='' />
                    <p>Experience the vibrant nightlife and famous beaches in Kuta, perfect for surf enthusiasts and sun-seekers.</p>
                </div>
            </div>
        </div>
        <div className='div3'>
            <h2>Immerse Yourself in Balinese Culture</h2>
            <p>Participate in traditional ceremonies, witness captivating dance performances, and savor the unique flavors of Balinese cuisine.</p>
        </div>
    </div>
</div>
  )
}

export default Balipage