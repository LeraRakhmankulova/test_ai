import ReviewsSlider from '../../components/ReviewsSlider/ReviewsSlider';
import Connection from '../../components/Connection/Connection';
import ColoredLine from '../../components/ColorLine/ColorLine';
import SwiperComponent from '../../components/Swiper/Swiper';
import { Container, Row, Col } from 'react-bootstrap';
import style from '../Main/index.module.sass';

import therapy1 from '../../assets/therapy1.png';
import therapy2 from '../../assets/therapy2.png';
import back from '../../assets/trees.png';
import flower from '../../assets/flower.png';
import food1 from '../../assets/food1.jpg';
import food2 from '../../assets/food2.jpg';
import comfort from '../../assets/back7.png';
import standart from '../../assets/back8.png';
import nature from '../../assets/nature.png';
import main from '../../assets/main_back.png';
import { useNavigate } from 'react-router';
import Trail from '../../components/containers/NavigateAnimation';
import NewsCard from '../../components/NewsCard/NewsCard';
import { newsItems } from '../../mocks/news';

const Main = () => {

    const news = newsItems;
    let navigate = useNavigate();

    const handleTreatment = () => {
        navigate('/treatment');
    }

    const handleApartments = () => {
        navigate('/apartments');
    }
    return (
        <Trail>
            <>
                <div className={style.slider_component}>
                    <SwiperComponent />
                </div>
                <div className={style.welcome_block}>
                    <Container fluid="sm">
                        <Row className="justify-content-center">
                            <Col sm={11} className={style.welcome}>
                                <div className={style.welcome__title}>
                                    <h1>Добро пожаловать в</h1>
                                    <h1>санаторий "Ай"</h1>
                                    <div className={style.welcome__subtitle}>
                                        <h3>Ваш путь к здоровью</h3>
                                        <h3>начинается с нами!</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <section>
                    <Container fluid="sm">
                        <Row className="justify-content-center">
                            <Col sm={11} className={style.info}>
                                <div className={style.text_line}>
                                    <ColoredLine color='white' width={640} margin='auto' />
                                    <h2>Отдых и оздоровление</h2>
                                </div>
                                <div className={style.info__text}>
                                    <p>Приглашаем на отдых в климатический санаторий, расположенный на живописном берегу реки Ай, в чудесном уголке исконно русской природы – чистый воздух, наполненный запахом полевых цветов и ароматами хвойного леса, тишина, удаленность от города, близость к девственному лесу создают особую атмосферу душевного покоя и умиротворенности столь необходимую в наше бурное, насыщенное событиями время.</p>
                                    <br />
                                    <p>В санатории проводится лечение болезней позвоночника и суставов, верхних дыхательных путей, сердечно-сосудистой и нервной систем. Прием и консультации отдыхающих  ведут высокопрофессиональные врачи. К услугам отдыхающих предлагаются более 20 лицензированных медицинских услуг, в рамках  внедренных нами  медицинских стандартов и  лечебно-оздоровительных программ.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <div className={style.full_image}>
                    <img src={back} alt="trees" />
                </div>
                <section>
                    <Container fluid="sm">
                        <Row className="justify-content-center">
                            <Col sm={11} className={style.info}>
                                <div className={style.text_line}>
                                    <ColoredLine color='white' width={340} margin='auto' />
                                    <h2>Что мы предлагаем</h2>
                                    <ColoredLine color='white' width={340} margin='auto' />
                                </div>
                                <div className={style.info__image__therapy} onClick={handleTreatment}>

                                    <div className={style.info__image__therapy__pict1} >
                                        <div className={style.scale}>
                                            <img src={therapy2} className={style.scale} alt="" />
                                        </div>
                                    </div>
                                    <div className={style.info__image__therapy__pict2}>
                                        <div className={style.scale}>
                                            <img src={therapy1} className={style.scale} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className={style.info__text_info}>
                                    <div className={style.info__text_info__block}>
                                        <p>
                                            Современное медицинское оборудование, разнообразные процедуры, в числе которых лечебные ванны и души, делают процесс оздоровления максимально эффективным. Внимательный и тактичный персонал обеспечивает комфорт на всем протяжении отдыха.
                                        </p>
                                    </div>
                                    <p>
                                        Индивидуальный подход к каждому отдыхающему на основе научных программ, включающих как годами проверенные методики, так и новейшие открытия медицины, которые обеспечат каждому гостю максимально возможное восстановление жизненных сил и профилактику заболеваний, т.к. самое ценное, что у нас есть - это наше здоровье.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <div className={style.full_image}>
                    <img src={flower} alt="flower" />
                </div>
                <section>
                    <Container fluid="sm">
                        <Row className="justify-content-center">
                            <Col sm={11} className={style.info}>
                                <div className={style.text_line}>
                                    <h2>Питание</h2>
                                    <ColoredLine color='white' width={950} margin='auto' />
                                </div>
                                <div className={style.food}>
                                    <p>Один из ключевых факторов, сохраняющих и приумножающих здоровье и силы организма – это питание. Полезное и обязательно вкусное. В санатории «Ай» к вопросу питания подходят серьезно, используя современные технологии, повара готовят более 100 разнообразных блюд и напитков на любой вкус, особое внимание уделяя диетическим меню, т.к. диета – важная составляющая любого лечения. Следуя рекомендациям врачей, повара снижают калорийность, содержание животных жиров, соли и легкорастворимых углеводов (сахара).</p>
                                </div>
                                <div className={style.food__images}>
                                    <div className={style.food__image}>
                                        <img src={food1} alt="" />
                                    </div>
                                    <div className={style.food__image}>
                                        <img src={food2} alt="" />
                                    </div>
                                </div>
                                <div className={style.text_line}>
                                    <ColoredLine color='white' width={500} margin='auto' />
                                    <h2>Номера</h2>
                                    <ColoredLine color='white' width={500} margin='auto' />
                                </div>
                                <div className={style.apartments}>
                                    <p>Для вашего отдыха мы предоставляем комфортабельные  номера категории «Стандарт» и «Повышенной комфортности», включающие необходимую мебель, телевизор, телефон, санузел.  К услугам - комната переговоров, тренажёрный зал, оборудованный современными тренажёрами, прокат спортинвентаря,  сауна, проводятся концерты и встречи с интересными людьми. </p>
                                </div>
                                <div className={style.apartments__images}>
                                    <div className={style.apartments__image} onClick={handleApartments}>
                                        <h3>Комфорт</h3>
                                        <div className={style.scale} >
                                            <img src={comfort} className={style.scale} alt="" />
                                        </div>
                                        <p>Подробнее...</p>
                                    </div>
                                    <div className={style.apartments__image} onClick={handleApartments}>
                                        <h3>Стандарт</h3>
                                        <div className={style.scale}>
                                            <img src={standart} className={style.scale} alt="" />
                                        </div>
                                        <p>Подробнее...</p>
                                    </div>
                                </div>
                                <div className={style.apartments}>
                                    <p>На благоустроенной территории  - спортивная площадка для игр в футбол, волейбол, баскетбол, теннис, бадминтон (в зимний период - ледовый каток), детский городок, летняя эстрада, мангальная зона. Бесплатная   автостоянка.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <div className={style.full_image}>
                    <img src={nature} alt="flower" />
                </div>
                <section>
                    <Container fluid="sm">
                        <Row className="justify-content-center">
                            <Col sm={11} className={style.reviews}>
                                <div className={style.text_line}>
                                    <ColoredLine color='white' width={450} margin='auto' />
                                    <h2>Отзывы</h2>
                                    <ColoredLine color='white' width={450} margin='auto' />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <ReviewsSlider />
                <Connection />
                <section>
                    <Container fluid="sm">
                        <Row className="justify-content-center">
                            <Col sm={11} className={style.news}>
                                <div className={style.text_line}>
                                    <h2>Новости</h2>
                                    <ColoredLine color='white' width={900} margin='auto' />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className={style.news_content}>
                    <Container fluid="sm">
                        <Row className="justify-content-center">
                            <Col sm={11} >
                                <div className={style.news_content__blocks}>
                                    {news.map(item =>
                                        <NewsCard
                                            id={item.id}
                                            title={item.title}
                                            image={item.image}
                                            description={item.description} />
                                    )}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <div className={style.main_background}>
                    <img src={main} alt="" />
                </div>
            </>
        </Trail>
    )
}

export default Main;