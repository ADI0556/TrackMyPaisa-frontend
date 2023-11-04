import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import '../../App.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import person1 from '../Images/users/ambani.jpg'
import person2 from '../Images/users/james.jpg'
import person3 from '../Images/users/tata.jpg'
import person4 from '../Images/users/elon.jpg'
import person5 from '../Images/users/modi.jpg'
export default function Testimonials() {
    return (
        <div>

            <h2 className="mt-5 pt-4 text-center fw-bold h-font">Our Testimonials</h2>
            <div className="mb-4 h-line bg-dark"></div>
            <div className="container mt-5">
                <Swiper
                    effect={'coverflow'}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    spaceBetween={20}
                    initialSlide={1}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                    }}
                    breakpoints={{
                        320: {
                          slidesPerView: 1,
                        },
                        640: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 3,
                        },
                      }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper swiper-testimonials"
                >
                    <SwiperSlide className="bg-white p-4 shadow-sm mb-5">
                        <div className="profile d-flex align-items-center mb-3">
                            <img src={person1} alt="person" className='w-50' />
                            <h6 className="m-0 ms-2">Mukesh Ambani</h6>
                        </div>
                        <p style={{ textAlign: "left" }} className='fs-6'>
                        I used to feel overwhelmed by my finances, but Track My Paisa changed everything. This website's user-friendly interface made tracking my expenses a breeze. I now have a clear plan for my savings goals, and the investment suggestions have been a game-changer. Thanks to Track My Paisa, I'm well on my way to achieving financial stability
                        </p>
                        <Box className='d-flex flex-direction-start'>
                            <Rating
                            className='badge rounded-pill bg-light'
                                name="read-only"
                                value={3}
                                precision={0.5}
                                readOnly
                            />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white p-4 shadow mb-5">
                        <div className="profile d-flex align-items-center mb-3">
                            <img src={person2} alt="person" className='w-50' />
                            <h6 className="m-0 ms-2">James Cameron</h6>
                        </div>
                        <p className='fs-6' style={{ textAlign: "left" }}>
                        Track My Paisa is a financial lifesaver! I've never been great with numbers, but this website's charts and reports helped me understand my spending patterns better. Setting and tracking my financial goals has been a motivational boost. It's like having a financial advisor in my pocket, guiding me towards a more secure future.
                        </p>
                        <Box className='d-flex flex-direction-start'>
                            <Rating
                            className='badge rounded-pill bg-light'
                                name="read-only"
                                value={4.5}
                                precision={0.5}
                                readOnly
                            />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white p-4 shadow mb-5">
                        <div className="profile d-flex align-items-center mb-3">
                            <img src={person3} alt="person" className='w-50' />
                            <h6 className="m-0 ms-2">Ratan Tata</h6>
                        </div>
                        <p className='fs-6' style={{ textAlign: "left" }}>
                        I was drowning in debt and had no idea how to get out of it. Track My Paisa gave me a clear path to debt reduction. The goal-setting feature helped me create a realistic plan, and the progress notifications kept me on track. I can proudly say that I'm on my way to being debt-free, thanks to this amazing platform.
                        </p>
                        <Box className='d-flex flex-direction-start'>
                            
                            <Rating
                                className='badge rounded-pill bg-light'
                                name="read-only"
                                value={3}
                                precision={0.5}
                                readOnly
                            />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white p-4 shadow mb-5">
                        <div className="profile d-flex align-items-center mb-3">
                            <img src={person4} alt="person" className='w-50' />
                            <h6 className="m-0 ms-2">Elon Musk</h6>
                        </div>
                        <p className='fs-6' style={{ textAlign: "left" }}>
                        As an experienced investor, I appreciate the investment suggestions from Track My Paisa. The personalized advice helped me diversify my portfolio and increase my returns. It's a fantastic resource for both beginners and seasoned investors looking to make the most of their money.                        </p>
                        <Box className='d-flex flex-direction-start'>
                            
                            <Rating
                                className='badge rounded-pill bg-light'
                                name="read-only"
                                value={5}
                                precision={0.5}
                                readOnly
                            />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white p-4 shadow mb-5">
                        <div className="profile d-flex align-items-center mb-3">
                            <img src={person5} alt="person" className='w-50' />
                            <h6 className="m-0 ms-2">Narendra Modi</h6>
                        </div>
                        <p className='fs-6' style={{ textAlign: "left" }}>
                        Track My Paisa has made me more financially aware than ever. I'm saving more, investing smarter, and, most importantly, feeling more confident about my financial future. This website has transformed the way I manage my money, and I'm truly grateful for the financial freedom it's given me                        </p>
                        <Box className='d-flex flex-direction-start'>
                            
                            <Rating
                                className='badge rounded-pill bg-light'
                                name="read-only"
                                value={4.5}
                                precision={0.5}
                                readOnly
                            />
                        </Box>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}