import React from 'react'
import './Style/Navbar.css'
import {Link} from 'react-router-dom'
const Naa = () => {
    return (
        <div className='nav-main'>
            <div className='nav-container'>
                <div className='nav-head'>
                    <h1>TravelBae</h1>
                </div>

                <div className='nav-list'>
                    <input type='checkbox' id='check'/>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/destinations'>Destinations</Link></li>
                        <li><Link to='/reports'>Reports</Link></li>
                       
                    </ul>
                    <label htmlFor='check' id='bar'><i class="fa-solid fa-bars"></i></label>
                </div>
            </div>
        </div>
    )
}

export default Naa