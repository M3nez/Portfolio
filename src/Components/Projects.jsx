import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import HomeButton from '../images/home.png'

const Projects = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length

    const nextSlide = (e) => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = (e) => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <div>
            <a href="/"><img src={HomeButton} alt="Home" className="HomeButton" /></a>
            <section className="slider">
                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
                {SliderData.map((slide, i) => {
                    return (
                        <div className={i === current ? 'slide active' : 'slide'} key={i}>
                            {i === current && (<img src={slide.image} alt="Project" className="image" />)}
                        </div>

                    )
                })}
            </section>
        </div>

    )
}

export default Projects;