import style from '../ApartmentList/index.module.sass';
import { Container, Row, Col } from 'react-bootstrap';
import ColoredLine from '../../components/ColorLine/ColorLine';
import Trail from '../../components/containers/NavigateAnimation';
import Item from '../../components/Item/Item';

import { comfortItems } from '../../mocks/apartments';
import { standardItems } from '../../mocks/apartments';


const ApartmentList = () => {
    const comfortRooms = comfortItems;
    const standartRooms = standardItems;
    return (
        <Trail>
            <div className={style.price_page}>
                <div className={style.price_page__header}></div>
                <Container fluid="sm">
                    <Row className="justify-content-center">
                        <Col sm={11}>
                            <h2>Номера для проживания</h2>
                            <div className={style.title_line}>
                                
                                <h4>Категория “Комфорт”</h4>
                                <ColoredLine color='white' width={850} margin='auto' />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className={style.apartments__blocks}>
                    {comfortRooms.map(item =>
                        <div className={style.apartments__block}>
                            <Item title={item.title} image={item.image} navigate={`/apartment_item/confort/${item.id}`} />
                        </div>
                    )}
                </div>
                <Container fluid="sm">
                    <Row className="justify-content-center">
                        <Col sm={10}>
                            <div className={style.title_line}>
                                <ColoredLine color='white' width={700} margin='auto' />
                                <h4>Категория “Стандарт”</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className={style.apartments_standart__blocks}>
                    {standartRooms.map(item =>
                        <div className={style.apartments_standart__block}>
                            <Item title={item.title} image={item.image} navigate={`/apartment_item/standart/${item.id}`} />
                        </div>
                    )}
                </div>
            </div>
        </Trail>
    );
}

export default ApartmentList;