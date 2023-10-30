import React from 'react'
import './hero.css'
import heroImg from '../assets/image-hero-desktop.png'
import { detailIcon } from '../data'

const Hero = () => {
    return (
        <div className='lg:flex justify-between items-center md:px-40 hero-section overflow-hidden pt-20'>
            <div className="hero-left">
                <h1 className='pt-10'>
                    Make <br className='hidden lg:block' /> remote work
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur earum iusto nobis nesciunt tempore voluptatum exercitationem modi enim provident rem.</p>
                <button>Learn more</button>
                <div className="icon-area">
                    <ul className='flex space-x-10 mt-20'>
                        {
                            detailIcon.map((icon)=>{
                                return <li key={icon.id}><img src={icon.image} alt="" /></li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="hero-right">
                <img className='md:px-6 block' src={heroImg} alt="" />
            </div>
        </div>
    )
}

export default Hero
