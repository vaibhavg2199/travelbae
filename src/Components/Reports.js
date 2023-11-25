import React from 'react'
import './Style/Reports.css';
const Reports = () => {
    return (
        <div className='report-main'>

            <div className='banner' style={{ backgroundColor: '#6C757D' }}>
                <h1>Travel Report</h1>
                <p>Explore insights and statistics about our travel destinations.</p>
            </div>


            <div className='report-container'>
                <div className='rc1'>
                    <h2>Destinations Overview</h2>
                    <p>Here is a summary of key information about our travel destinations:</p>
                    <ul>
                        <li>Total number of destinations: 4</li>
                        <li>Most popular destination: Bali</li>
                        <li>Total number of visitors: 100</li>
                    </ul>
                </div>

                <div className='rc2'>
                    <h2>Customer Feedback</h2>
                    <p>Read what our customers have to say about their travel experiences:</p>

                    <div className='rc2-1'>
                        <p>"I had an amazing time exploring Rome. The sights were breathtaking, and the people were so welcoming. Definitely a trip to remember!"</p>
                        <dd>-John Doe</dd>
                    </div>

                    <div className='rc2-1'>
                        <p>"The travel arrangements were seamless, and the recommended activities in Bali were spot on. Thank you for a fantastic experience!"</p>
                        <dd>-Jane Smith</dd>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reports