import React from 'react'
import Button from 'react-bootstrap/Button'
const Hero = () => {
    return (
        <section className='hero'>
            <div className="logo"></div>
            <div className='content'>
                <div className="title">BID & WIN online auction</div>
                <div className="semi-title">Lorem ipsum dolor</div>
                <Button className='button' size="lg">Login</Button>
            </div>
        </section>
    )
}

export default Hero;