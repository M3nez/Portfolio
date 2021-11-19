import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Portfolioimg from '../images/Portfolioimg.jpg';
import linkedinLogo from '../images/LinkedIn-Logos/LI-Logo.png';
import GitLogo from '../images/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png';
import Resume from '../Resume/Resume Template - make a copy - Google Docs.pdf'
import Sunny from '../images/sunny.png'

const HomePage = (props) => {
    const [City, setCity] = useState("")
    const [weather, setWeather] = useState([])
    const history = useHistory();
    const linkedin = "https://www.linkedin.com/in/antonio-jimenez-sandoval-87a495219/";
    const github = "https://github.com/M3nez?tab=repositories"


    const Weather = (e) => {
        e.preventDefault();
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=b4f201e3453536219aab7c01f3eaa13b&units=imperial`)
            .then(res => {
                console.log(res.data)
                setWeather([res.data])
            })
            .catch(err => console.log("There was an error while trying to get information:" + err));
        setCity("")
    }

    return (
        <div className="Container">
            <div className="APIContainer">
                <div className="API">
                    {
                        weather.map((temp, i) => {
                            return (
                                <div key={i} className="Weather">
                                    <img className="Icon" src={Sunny} alt="WeatherIcon" />
                                    <p className="CityTemp">Temp: {temp.main.temp}°F</p>
                                </div>
                            )
                        })
                    }
                    <form onSubmit={Weather}>
                        <label>City: </label>
                        <input className="search" type="text" onChange={e => setCity(e.target.value)} value={City} />
                        {"  "}
                        <button type="submit" className="button">Search</button>
                    </form>
                </div>
            </div>
            <div className="Card">
                <img className="img" src={Portfolioimg} alt="antonio" style={{ width: 260 }} />
                <h1>Antonio Jimenez</h1>
                <p className="title">Full Stack Developer</p>
                <p>Kuna, Idaho</p>
                <a href={linkedin}><img style={{ width: 60 }} src={linkedinLogo} alt="linkedin" /></a>{"    "}
                <a href={github}><img src={GitLogo} alt="githublogo" style={{ width: 20 }} /></a>
                <br />
            </div>
            <div className="links">
                <button className="cardbutton" onClick={e => history.push('/emailForm')}>Contact Me!</button>
                <button className="cardbutton" onClick={e => history.push('/projects')}>My Projects</button>
                <button className="cardbutton" ><a className="Resume" href={Resume} download>Resume Download</a></button>
            </div >

        </div >
    )
}

export default HomePage;