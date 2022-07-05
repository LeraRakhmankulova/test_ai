import style from '../Connection/index.module.sass';
import { Container, Row, Col } from 'react-bootstrap';

import people from '../../assets/back10.png'

const Connection = () => {
    return (
        <div>
            <Container fluid="sm" className={style.connection_wrapper}>
                <Row className="justify-content-center">
                    <Col sm={5} className={style.connection_wrapper__image}>
                        <img src={people} alt="" />
                    </Col>
                    <Col sm={4} className={style.news}>
                        <h3>Свяжитесь с нами</h3>
                        <p>Мы с радостью ответим на все ваши вопросы и поможем в выборе.  </p>
                    </Col>
                </Row>
            </Container>
            <Container fluid="sm">
                <Row className="justify-content-center">
                    <Col sm={11} className={style.connection}>
                        <div className={style.connection__block}>
                            <h4>Контакты</h4>
                            <p>+7(347)982-20-31</p>
                            <p>+7(347)982-20-41</p>
                            <p>+7(961)366-55-74</p>
                        </div>
                        <div className={style.connection__block}>
                            <h4>Адрес</h4>
                            <p>Республика Башкортостан, Дуванский район, с. Месягутово, корп. Сосновый бор</p>
                        </div>
                        <div className={style.connection__block}>
                            <h4>Email</h4>
                            <p>sanatoriy-ai@yandex.ru;</p>
                            <p>  www.санаторий-ай.рф</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Connection;
