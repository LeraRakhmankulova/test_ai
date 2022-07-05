import style from '../Footer/index.module.sass';
import { Row, Col, Container } from 'react-bootstrap';
import logo from '../../assets/logo.svg';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <Container fluid="sm">
                <Row className="justify-content-center">
                    <Col sm={5}>
                        <div className={style.footer__column__logo}>
                            <img src={logo} alt='' width={5} />
                            <div className={style.title}>
                                <h5>Санаторий</h5>
                                <h5>АЙ</h5>
                            </div>
                        </div>
                        <nav className={style.footer__column__logo}>
                            <ul>
                                <li><a href='/rules'>Правила</a></li>
                                <li><a href='/treatment'>Лечение</a></li>
                            </ul>
                            <ul>
                                <li>
                                    <a href='/prices'>Проживание</a></li>
                                <li><a href='/relaxation'>Отдых</a></li>
                            </ul>
                        </nav>
                    </Col>
                    <Col sm={3}>
                        <p>Контакты</p>
                        <p>+7(347)982-20-31</p>
                        <p>+7(347)982-20-41</p>
                        <p>+7(961)366-55-74</p>
                    </Col>
                    <Col sm={3}>
                        <p>Email</p>
                        <p>sanatoriy-ai@yandex.ru;</p>
                        <p>www.санаторий-ай.рф</p>
                    </Col>
                </Row>
            </Container>
        </footer>

    );
}

export default Footer;