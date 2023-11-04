import React from 'react'
import m1 from '../Images/About/m1.jpg'
import m2 from '../Images/About/m2.jpeg'
import m3 from '../Images/About/m3.jpeg'
import m4 from '../Images/About/m4.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react';
// import '../Css/Team.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards, Autoplay } from 'swiper/modules';
export default function Management() {
    const swiperStyles = {
        width: '280px',
        height: '360px',
    };

    const slideStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5%',
    };

    const imgStyles = {
        width: '50%',
        height: '50%',
        objectFit: 'cover',
        objectPosition: 'center',
        borderRadius: '50%'
    };

    return (
        <div>
            <h3 className="fw-bold h-font text-center mt-5">Management Team</h3>
            <div className="h-line bg-dark mb-5"></div>

            <Swiper
                effect={'cards'}
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                modules={[EffectCards, Autoplay]}
                className='mySwiper shadow rounded-4'
                style={swiperStyles}
            >
                <SwiperSlide style={slideStyles} className='fw-bold'>
                    <img style={imgStyles} src={m1} alt='person' className='mb-4' />
                    <p>Adarsh Shetty</p>
                    <p>Director</p>
                </SwiperSlide>
                <SwiperSlide style={slideStyles} className='fw-bold'>
                    <img style={imgStyles} src={m3} alt='person' className='mb-4' />
                    <p>Shanawazuddin Md</p>
                    <p>Director</p>
                </SwiperSlide>
                <SwiperSlide style={slideStyles} className='fw-bold'>
                    <img style={imgStyles} src={m1} alt='person' className='mb-4' />
                    <p>Dadapeer Proddutur</p>
                    <p>Director</p>
                </SwiperSlide>
                <SwiperSlide style={slideStyles} className='fw-bold'>
                    <img style={imgStyles} src={m2} alt='person' className='mb-4' />
                    <p>Sushwanth A</p>
                    <p>Director</p>
                </SwiperSlide>
                <SwiperSlide style={slideStyles} className='fw-bold'>
                    <img style={imgStyles} src={m4} alt='person' className='mb-4' />
                    <p>Tejas S</p>
                    <p>Director</p>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
