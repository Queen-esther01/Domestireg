import React from 'react'
import Slider1 from '../../assets/images/slider01.jpg'
import Slider2 from '../../assets/images/slider02.jpg'
import Slider3 from '../../assets/images/slider03.jpg'
import Slider4 from '../../assets/images/slider04.jpg'
import Slider5 from '../../assets/images/slider05.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, EffectFade} from 'swiper';
// swiper bundle styles
import 'swiper/css/bundle'

// swiper core styles
import 'swiper/css'

// modules styles
import 'swiper/css/pagination'
import { Container } from 'react-bootstrap';


// install Swiper modules
SwiperCore.use([Autoplay, EffectFade, Pagination]);

const sliders = [
    {
        image: Slider1,
        description: 'Welcome to Domestireg',
        heading: 'Quality checked, realtime results',
        button: 'Explore our services',
        link: '/subbouquet'
    },
    {
        image: Slider2,
        description: 'Investigative services',
        heading: 'Be confident you have hired the right person',
        button: 'Get started',
        link: ''
    },
    {
        image: Slider3,
        description: 'Background checks',
        heading: 'Be sure before you hire',
        button: 'Get started',
        link: '/background-bouquet'
    },
    {
        image: Slider4,
        description: 'Hire with confidence',
        heading: 'Be confident we get it right every time!',
        button: 'Get started',
        link: ''
    },
    {
        image: Slider5,
        description: 'Background checks',
        heading: "Don't play Russian Roulette with your family's health and safety.",
        button: 'Get started',
        link: '/background-bouquet'
    },
]
function Slider() {
    return (
        <>
            <div className="">
                <Swiper
                    // spaceBetween={50}
                    effect={'fade'}
                    slidesPerView={1}
                    speed={2000}
                    autoplay
                    pagination={{ clickable: true }}
                >
                    {
                        sliders.map((data, i) => {
                            return <SwiperSlide key={i} className='swiper-slide-hero'>
                                            <img src={data.image} alt="" className='w-100 h-100 object-fit-cover object-position-center'/>
                                            <div className="slider-overlay"></div>
                                            <Container fluid='lg' className=''>
                                                <div className='slider-description'>
                                                    <p className='animate__animated animate__fadeInUp'>{data.description}</p>
                                                    <h1 className="slider-tagline animate__animated animate__fadeInUp animate__delay-1s"> {data.heading} </h1>
                                                    <button className='button-primary text-bold mt-4 animate__animated animate__fadeInUp animate__delay-1s'>{data.button}</button>
                                                </div>
                                            </Container>
                                    </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </>
    )
}

export default Slider
