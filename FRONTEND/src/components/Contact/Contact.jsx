import './Contact.css'

function Contact(){
    return(
        <div id="contact-us">
            <h2>Contact Us</h2>
            <p>We’d love to hear from you! Whether you have a question or need more information, feel free to reach out.</p>

            <div className="contact-container">
                {/* Contact Details */}
                <div className="contact-details">
                    <h3>Get in Touch</h3>
                    <p><strong>Phone:</strong></p>
                    <ul>
                        <li><strong>Margoob Alam:</strong> 9967552722</li>
                        <li><strong>Abdullah:</strong> 9867976960</li>
                        <li><strong>MD Murshid:</strong> 7977988876</li>
                    </ul>
                    <p><strong>Email:</strong> roshanenterprises81@gmail.com </p>
                    <p><strong>Address:</strong> Koknipada , Opp Triveni Nagar, Malad East ,Mumbai 400097 </p>
                </div>

                {/* Contact Form */}
                <form className="contact-form">
                    <label>
                        <input type="text" name="name" placeholder="Your Name" required />
                    </label>
                    <label>
                        <input type="email" name="email" placeholder="Your Email" required />
                    </label>
                    <label>
                        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                    </label>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}
export default Contact;