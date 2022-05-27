import React from 'react';
import HomeButton from '../images/home.png'

const HomePage2 = (props) => {
    return (
        <div className="Container">
            <a href="/"><img src={HomeButton} alt="Home" className="HomeButton" /></a>
            <div className="Card2">
                <p className='About'>
                    The number 23, what does it mean to you? Well to me it just happens to be my age, that is all. I was born in Ixtapan De La Sal, state of Mexico, Country of Mexico. I was brought to the United States when I was five years old and at the age of 16 I became a recipient of DACA. With that, I seek the opportunity to move ahead in this country and show my parents that their hard work and struggle was not wasted.
                </p>
            </div>
        </div >
    )
}

export default HomePage2;