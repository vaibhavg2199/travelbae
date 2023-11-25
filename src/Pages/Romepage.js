import React from 'react'

const Romepage = () => {
  return (
    <div className='Italypage'>
    <div className='banner' style={{ backgroundColor:'#DC3545'}}>
        <h1>Rome</h1>
        <p>Discover the Beauty of Rome</p>
    </div>

    <div className='main1'>
        <div className='div1'>
            <h2>Welcome to Rome!</h2>
            <p>Rome, the capital city of Italy, is a treasure trove of history, art, and culture. From ancient wonders like the Colosseum to the splendor of the Vatican City, Rome is a destination that captivates visitors with its timeless beauty.</p>
        </div>
        <div className='div2'>
            <h2>Explore the Rich History</h2>
            <div className='images'>
                <div className='imagediv1'>
                    <img src='./colo.svg' alt='' />
                    <p>Step back in time as you visit the iconic Colosseum, a symbol of ancient Roman engineering and entertainment.</p>
                </div>
                <div className='imagediv2'>
                    <img src='./romanforum.svg' alt='' />
                    <p>Explore the ruins of the Roman Forum, where political, religious, and commercial activities once thrived.</p>
                </div>
            </div>
        </div>
        <div className='div3'>
            <h2>Experience Vatican City</h2>
            <p>Discover the artistic and spiritual treasures of Vatican City, including St. Peter's Basilica and the Sistine Chapel.</p>
        </div>
    </div>
</div>
  )
}

export default Romepage