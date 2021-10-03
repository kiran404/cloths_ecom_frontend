import React from 'react';
import Layout from './Layout';
import './../css/Contact.css';

const Contact = () => (
    <Layout title="Welcome To K-Market" description="Happy To Help" className="container-fluid contact-container">
        <div className="contact" id="contact">

            <div className="col-md-offset-1 col-md-10">
                <h2>Contact Me<i className="fa fa-paper-plane-o"></i></h2>
                <div id="map-canvas"></div>
            </div>
            <h1>Under Development</h1>
            <form method="post" action="contact.php" name="contactform" id="contactform">
                <div className="col-md-offset-1 col-md-5 input-width">
                    <fieldset>
                        <input name="name" type="text" id="name" size="30" placeholder="Name" />
                        <br />
                        <input name="email" type="text" id="email" size="30" placeholder="Email" />
                        <br />
                        <input name="phone" type="text" id="phone" size="30" placeholder="Phone" />
                        <br />
                        <input name="human" type="text" id="human" size="30" placeholder="Prove your not a robot... What is 2+2?" />
                        <br />
                    </fieldset>
                </div>
                <div className="col-md-5 input-width">
                    <fieldset>
                        <textarea name="comments" cols="40" rows="20" id="comments" placeholder="Message"></textarea>
                    </fieldset>
                </div>
                <div className="col-md-offset-1 col-md-10">
                    <fieldset>
                        <button type="submit" className="btn btn-lg" id="submit" value="Submit">Send Message</button>
                    </fieldset>
                </div>
            </form>

        </div>
    </Layout>

);

export default Contact;