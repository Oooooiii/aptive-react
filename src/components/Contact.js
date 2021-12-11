import React from 'react'
import './ContactStyles.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="col-1">
                    <div className="content">
                        <div>
                            <h2>Get in touch</h2>
                            <p>Interviewers will sometimes ask about your hobbies or interests outside of work in order to get to know you a little better—to find out what you’re passionate about and devote time to during your off-hours</p>
                        </div>
                        <div className="address">
                            <p>483 Evergreen Terrace</p>
                            <p>Springfield, OR 12343</p>
                        </div>
                        <div className="icons">
                            <FaPhone style={{ marginRight: '1rem' }} />
                            <p>+1 (555) 123-432</p>
                        </div>
                        <div className="icons">
                            <FaEnvelope style={{ marginRight: '1rem' }} />
                            <p>support@contact.com</p>
                        </div>
                        <div className="careers">
                            <p>Looking for careers? <span>View all job openings.</span></p>
                        </div>
                    </div>
                </div>

                <div className="col-2">
                    <form action="">
                        <input type="text" placeholder="Full name" />
                        <input type="email" placeholder="Email" />
                        <input type="phone" placeholder="Phone" />
                        <textarea name="Message" placeholder="Message" cols="30" rows="10"></textarea>
                        <div className="checkbox">
                            <input type="checkbox" />
                            <p>By checking this box, you agree to the <span>Privacy Policy</span> and <span>Cookie Policy</span></p>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
