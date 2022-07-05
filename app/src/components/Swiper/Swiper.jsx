import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import './sliderStyle.sass';

import img1 from '../../assets/slide1.png';
import img2 from '../../assets/slide2.png';
import img3 from '../../assets/slide3.png'

const SwiperComponent = () => {
    return (
        <div className='wrapper_slider'>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                speed={3000}
                loop={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                  }}>
                <SwiperSlide>
                    <img src={img1} alt='' className='picture_size'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt='' className='picture_size'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt='' className='picture_size'/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default SwiperComponent;