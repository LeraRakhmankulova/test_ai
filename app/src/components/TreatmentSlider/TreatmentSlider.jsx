import '../TreatmentSlider/index.sass';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { useNavigate } from 'react-router-dom';
import 'swiper/css/navigation';
import 'swiper/css';

import slide1 from '../../assets/treatmentSlide.png'


const TreatmentSlider = (props) => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate(`/treatment_item/${props.id}`);
      };
    return (
        <div className='wrapper_content'>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                speed={1200}
                loop={true}
                autoplay={true}
                navigation={{
                    nextEl: '.swiper-button-next-u',
                    prevEl: '.swiper-button-prev-u',
                }}>
                <SwiperSlide>
                    <div className='wrapper_content'>
                        <div className='wrapper_content__title'>
                            <h4>{props.title}</h4>
                        </div>
                        <div className='wrapper_content__image'>
                            <img src={props.image} alt="" />
                        </div>
                    </div>
                    <div className='wrapper_content__more' onClick={handleClick}>
                        <p>Подробнее...</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default TreatmentSlider;
