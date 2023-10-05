import React from 'react'
import './Firstgage.css'

const Firstpage = () => {
    return (
        <div className='box-first'>

            <img src='Road Trip by car image 1.jpg' alt=''>

            </img>
            <div className='box-firxt'>
                <div className='btn'>
                    <button className='bg'>Outstation</button>
                    <button>Local</button>
                    <button>Airport</button>

                </div>
                <div className='btn-bg'>
                    <button className='bg'>Outstation</button>
                    <button>Local</button>

                </div>
                <div className='out'>
                    <li>from</li>
                    
                    <li>to</li>
                    <li>Pick Up At</li>

                </div>
                <div className='btn-bt'>
                <button className='bg'>Explore Cabs</button>
                </div>

            </div>

        </div>
    )
}

export default Firstpage
