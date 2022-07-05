import style from '../Header/index.module.sass';
import logo from '../../assets/logo.svg';
import { Navbar, Container, Row, Col, Button, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <div className={style.wrapper}>
            <Row className="justify-content-center">
                <Col sm={10}>
                    <Navbar expand="lg" variant="dark" className={style.header}>
                        <Container>
                            <Navbar.Brand href="/">
                                <div className={style.header__logo}>
                                    <img src={logo} alt='Ай' />
                                    <p>Санаторий Ай</p>
                                </div>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className={style.item}>
                                    <Nav.Link href="/rules">Правила</Nav.Link>
                                    <Nav.Link href="/apartments">Проживание и цены</Nav.Link>
                                    <Nav.Link href="/treatment">Лечение</Nav.Link>
                                    <Nav.Link href="/entertainments">Отдых</Nav.Link>
                                    <Nav.Link className={style.header__phone}>Обратный звонок</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
        </div>
    );
}

export default Header;