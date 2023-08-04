import React from 'react'

import "./Contact.css"

const Contact = () => {
  return (
    
    <div className="contact" id='contact'>
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" required placeholder='Enter Your name' />
                </div>

                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" required placeholder='Enter Your Email' />
                </div>

                <div>
                    <label htmlFor="">Message</label>
                    <input type="text" required placeholder='Tell us about your query...' />
                </div>
                <button type="submit">Submit</button>
            </form>
        </main>
    </div>

  )
}

export default Contact