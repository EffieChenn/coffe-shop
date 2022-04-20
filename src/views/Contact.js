import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import '../css/Main.css';

const Contact = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <div className="main">
                <form action="">
                    <h1>CONTACT US</h1>
                    Your Name : <br /><br /><input type="text" required/>
                    <br /><br />
                    Your Email : <br /><br /><input type="email" required/>
                    <br /><br />
                    Message : <br /><br /><textarea rows={10} cols={30} placeholder="Tell us something......" required>

                    </textarea>
                    <br /><br />
                    <button >SEND</button>
                </form>
            </div>

        </div>
    );
};

export default Contact;