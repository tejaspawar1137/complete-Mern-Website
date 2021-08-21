import React from 'react'

const Contact = () => {
    return (
        <>
        <div className="container-fluid">
        <p aria-hidden="true">
         <span class="placeholder col-6"></span>
        </p>

         <a href="#" id="first" class="btn btn-primary disabled placeholder col-4" aria-hidden="true">ContactUs :+91 4343434</a>
         <p aria-hidden="true">
         <span class="placeholder col-6"></span>
        </p>

         <a href="#" id="second" class="btn btn-light disabled placeholder col-4" aria-hidden="true">Email: tejaspawar1137@gmail.com</a>
         <p aria-hidden="true">
         <span class="placeholder col-6"></span>
        </p>

         <a href="#" id="third" class="btn btn-primary disabled placeholder col-4" aria-hidden="true">Address: Type Your Address Down Below</a>
        </div>
        <section className="signup">
        <div className="container">
          <div className="signup-content">
              <div className="heading">
                Get In Touch
              </div>
              <form id="contact_forrm">
                 <div className="contact_form_name">
                   <input type="text" id="contact_form_name_name" placeholder="Your Name" required="true"  />
                   <input type="email" id="contact_form_name_email" placeholder="Your Email" required="true"  />
                   <input type="Number" id="contact_form_name_number" placeholder="Your Phone Number" required="true"  />
                 </div>
                 <div className="contact_form_text">
                   <textarea  id="text_field" placeholder="Enter Message" cols="30" rows="10"></textarea>
                 </div>
                 <div className="contact_form_button">
                   <button type="submit" className="button_contact">Send Message</button>
                 </div>
              </form>
          </div>
        </div>
      </section>
        </>
    )
}

export default Contact
