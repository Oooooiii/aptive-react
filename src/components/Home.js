import React from 'react'
import './HomeStyles.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Pricing from './Pricing'
import Testimonials from './Testimonials'
import Faq from './Faq'
import Contact from './Contact'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Pricing />
            <Testimonials />
            <Faq />
            <Contact />
        </div>
    )
}

export default Home
