import React from 'react';
import Layout from './Layout';

const Contact = () => (
    <Layout title="Welcome To K-Market" description="Happy To Help" className="container-fluid">
        <h1>Contact Page</h1>
        
            <form>
                {/* <label forName="fname">First Name</label> */}
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                {/* <label forName="lname">Last Name</label> */}
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                {/* <label forName="country">Country</label> */}
                <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select>

                <label forName="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

                <input type="submit" value="Submit"></input>

            </form>
        
    </Layout>
);

export default Contact;