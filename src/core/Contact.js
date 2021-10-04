import React from 'react';
import Layout from './Layout';
import './../css/Contact.css';

const Contact = () => (
    <Layout title="Welcome To K-Market" description="Happy To Help" className="container-fluid contact-container">
        <div className="contact" id="contact">

            <div className=' container'>
                <div className='content'>
                    <h1>Style Hunt</h1>
                    <p>Want to get in touch here is how you can contact us</p>
                </div>

                <div className='cardContainer'>
                    <div className='cardContent'>

                        <p className='title'>Talk to sales</p>
                        <p className='desc'>Get expert insights straight to your inbox, and become a better customer success manager. Subscribe to the Service Blog below.</p>
                        <p className='desc'>Mail us at<strong>hunt.style@gmail.com</strong></p>
                        <p>+997 9849173278</p>
                    </div>
                    <div className='cardContent'>
                        <p className='title'>Find Us At</p>
                        <h3 className='desc'>Inacho 9, Bhaktapur</h3>
                        <p className='title'>Opposite of <strong>3 Stones Cafe</strong></p>
                        <p>+997 9860487453</p>
                    </div>
                </div>

            </div>

        </div>
    </Layout>

);

export default Contact;