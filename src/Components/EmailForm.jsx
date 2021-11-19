import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import emailjs from 'emailjs-com'
import homelogo from '../images/home.png'


const EmailForm = () => {
    const history = useHistory();
    const [Subject, setSubject] = useState("")
    const [Name, setName] = useState("")
    const [Email, setuserEmail] = useState("")
    const [Message, setMessage] = useState("")

    const sendEmail = (e) => {
        e.preventDefault();

        const newEmail = {
            Subject: Subject,
            Name: Name,
            Email: Email,
            Message: Message
        }
        emailjs.send('service_71hv63m', 'template_z0pim0m', newEmail, 'user_siSPx7hyUEWFx5Mi5zLoI')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setSubject("");
        setuserEmail("");
        setMessage("");
        setName("")

    };



    return (
        <div className="Container">
            <Link to="/">
                <img src={homelogo} alt="Homebutton" style={{ width: 30, }} />
            </Link>
            <div className="row">
                <div className="col">
                    <h3>Contact Me!</h3>
                    <form onSubmit={sendEmail}>
                        <label>Subject </label>
                        <br />
                        <input className="styled" type="text" value={Subject} name="Subject" onChange={(e) => setSubject(e.target.value)} required />
                        <br />
                        <br />
                        <label>Name </label>
                        <br />
                        <input className="styled" type="text" value={Name} name="Name" onChange={(e) => setName(e.target.value)} required />
                        <br />
                        <br />
                        <label>Your Email </label>
                        <br />
                        <input className="styled" type="email" value={Email} name="Email" onChange={(e) => setuserEmail(e.target.value)} required />
                        <br />
                        <br />
                        <label>Message </label>
                        <br />
                        <textarea required className="styled" cols="20" value={Message} rows="5" name="Message" onChange={(e) => setMessage(e.target.value)} >
                        </textarea>
                        <br />
                        <br />
                        <button type="submit" className="button">Send</button>{"  "}|{"  "}
                        <button onClick={(e) => history.push("/")} className="button">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default EmailForm;