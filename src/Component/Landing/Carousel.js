
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../App.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import img from '../Images/carousel/IMG_15372.png';
import img1 from '../Images/carousel/1.jpg';
import img2 from '../Images/carousel/2.png';
import img3 from '../Images/carousel/3.jpg';
import img4 from '../Images/carousel/4.png';
import img5 from '../Images/carousel/5.jpg';
// my-app\src\Components\IMG_15372.png
// my-app\src\Images\carousel\IMG_15372.png
// import required modules
import { Autoplay } from 'swiper/modules';

export default function App() {
    return (
        <div className="container-fluid px-lg-4 mt-4">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <img src={img1} alt="carousel" className="d-block mx-auto img-fluid" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img2} alt="carousel" className="d-block mx-auto img-fluid" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img3} alt="carousel" className="d-block mx-auto img-fluid" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img4} alt="carousel" className="d-block mx-auto img-fluid" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img5} alt="carousel" className="d-block mx-auto img-fluid" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
