import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import './TestimonialsStyles.css'

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className="container">
                <div className="outline">
                    <div className="content">
                        <i><FaDatabase /> Staxx</i>
                        <p className="body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="name">
                            <p>Marie Chilvers</p>
                            <p>CEO, Staxx</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
