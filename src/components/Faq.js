import React from 'react'
import './FaqStyles.css'

const Faq = () => {
    return (
        <div className="section-faq">
            <div className="container">
                <div className="col-1">
                    <h3>Frequently asked questions</h3>
                    <p>Can't find the answer you're looking for?</p>
                    <p>Reach out to our <span>customer support</span> team.</p>
                </div>

                <div className="col-2">
                    <div className='faq'>
                        <h5>What’s Your Management Style?</h5>
                        <p>The best managers are strong but flexible, and that’s exactly what you want to show off in your answer. </p>
                    </div>
                    <div className='faq'>
                        <h5>Why Are You Leaving Your Current Job?</h5>
                        <p>This is a toughie, but one you can be sure you’ll be asked. Definitely keep things positive—you have nothing to gain by being negative about your current employer.</p>
                    </div>
                    <div className='faq'>
                        <h5>Why Was There a Gap in Your Employment?</h5>
                        <p>Maybe you were taking care of children or aging parents, dealing with health issues, or traveling the world.</p>
                    </div>
                    <div className='faq'>
                        <h5>Can You Explain Why You Changed Career Paths?</h5>
                        <p>Don’t be thrown off by this question—just take a deep breath and explain to the hiring manager why you’ve made the career decisions you have.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
