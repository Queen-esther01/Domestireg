import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, EffectFade, EffectCoverflow, EffectFlip, EffectCards} from 'swiper';
// swiper bundle styles
import 'swiper/css/bundle'

// swiper core styles
import 'swiper/css'

// modules styles
import 'swiper/css/pagination'

// install Swiper modules
SwiperCore.use([Autoplay, EffectFade, EffectCards, Pagination, EffectCoverflow, EffectFlip]);

const testimonials = [
    {
        id: 1,
        name: 'Johnson Adams',
        testimonial: 'Always thought it was a good venture for a person that had the passion, drive and tenacity to make this verry much needed app a workable solution to this vacum in our society.'
    },
    {
        id: 2,
        name: 'Funsho Adebayo',
        testimonial: 'This tool should also work closely with existing law enforcement agencies to quickly deceminate information to them and aide in resolving petty crimes before they escalate to more dangerous or life threatening situations.'
    }
]

function Testimonial() {
    return (
        <>
            <div className="testimonial-container py-5 my-5 bg-light-pink">
                <Container fluid='lg' className='py-5'>
                    <Swiper
                        //spaceBetween={300}
                        // effect={'fade'}
                        slidesPerView={1}
                        speed={2000}
                        autoplay
                        centeredSlides
                        pagination={{ clickable: true }}
                    >
                        {
                            testimonials.map((data, i) => {
                                return <Row key={i} className='justify-content-md-center'>
                                            <Col xs={12}>
                                                <SwiperSlide className='swiper-slide-testimonial'>
                                                    <div className='testimonial-content'>
                                                        <p className='testimonial-text'>"{data.testimonial}"</p>
                                                        <p className="testimonial-author"> - {data.name} </p>
                                                    </div>
                                                </SwiperSlide>
                                            </Col>
                                        </Row>
                            })
                        }
                    </Swiper>
                </Container>
            </div>
        </>
    )
}

export default Testimonial
