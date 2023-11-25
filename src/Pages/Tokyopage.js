import React from 'react'
import './Italypage.css'
const Tokyopage = () => {
  return (
    <div className='Italypage'>
            <div className='banner' style={{ backgroundColor:'#FFC107'}}>
                <h1>Tokyo</h1>
                <p>Explore the Beauty of Tokyo</p>
            </div>

            <div className='main1'>
                <div className='div1'>
                    <h2>Welcome to Tokyo!</h2>
                    <p>Tokyo, the capital city of Japan, is a vibrant metropolis where modernity and tradition coexist. From futuristic skyscrapers to historic temples, Tokyo offers a unique blend of experiences for every traveler.</p>
                </div>
                <div className='div2'>
                    <h2>Explore Tokyo's Landmarks</h2>
                    <div className='images'>
                        <div className='imagediv1'>
                            <img src='./shibuya.svg' alt='' />
                            <p>Visit the iconic Shibuya Crossing, one of the busiest pedestrian crossings in the world.</p>
                        </div>
                        <div className='imagediv2'>
                            <img src='./asskusa.svg' alt='' />
                            <p>Experience the traditional side of Tokyo in Asakusa, home to the historic Senso-ji Temple.</p>
                        </div>
                    </div>
                </div>
                <div className='div3'>
                    <h2>Indulge in Tokyo's Culinary Delights</h2>
                    <p>Explore the diverse and delicious world of Japanese cuisine, from sushi and ramen to street food delights.</p>
                </div>
            </div>
        </div>
  )
}

export default Tokyopage