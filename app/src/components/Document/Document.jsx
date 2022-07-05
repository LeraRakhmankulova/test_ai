import style from '../Document/index.module.sass';
import { Container, Row, Col } from 'react-bootstrap';

import svg from '../../assets/doc.svg';

const Document = () => {
    return (
        <div className={style.document}>
            <div >
                <Container fluid="sm">
                    <Row className="justify-content-center">
                        <Col sm={11} className={style.document__content}>
                            <div className={style.document__content__logo}>
                                <img src={svg} alt="" />
                            </div>
                            <div className={style.document__content__name}>
                                <h5>Противопоказания</h5>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Document;
