import '../ReviewsSlider/index.sass';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { reviewsItems } from '../../mocks/reviews';
import 'swiper/css/navigation';
import 'swiper/css';

const ReviewsSlider = () => {
    return (
        <div>
            <Swiper
                className='reviews_slider'
                modules={[Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                speed={2000}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}>
                {reviewsItems.map(item =>
                    <SwiperSlide>
                        <div className='slide'>
                            <div className='slide__content'>
                                <h4>{item.name}</h4>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    </SwiperSlide>)}
            </Swiper>
        </div>
    )
}

export default ReviewsSlider;
