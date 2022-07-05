import style from '../ApartmentStandart/index.module.sass';
import { Container, Row, Col } from 'react-bootstrap';
import ColoredLine from '../../components/ColorLine/ColorLine';
import Trail from '../../components/containers/NavigateAnimation';
import background_room from '../../assets/back_room.png';

const ApartmentStandart = (props) => {
  return (
    <Trail>
      <>
      <div className={style.room_page}>
      <div className={style.room_page__header}></div>
        <Container fluid="sm">
          <Row className="justify-content-center">
            <Col sm={11}>
              <div className={style.title_line}>
                <h3>{props.title}</h3>
                <ColoredLine color='white' width={800} margin='auto' />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={6}>
              <div className={style.scale}>
                <img src={props.image} alt="" className={style.apartment__image} />
              </div>
            </Col>
            <Col sm={5}>
              <div className={style.apartment__info}>
                <p>{props.description}</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={11}>
              <div className={style.apartment__title}>
                <h3>В номере вас ждут:</h3>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={4}>
              <div className={style.apartment__block}>
                <p>Двуспальная кровать</p>
                <p>Удобное рабочее место</p>
                <p>Шкаф для одежды</p>
                <p>Прикроватные тумбочки</p>
                <p>Телефон и телевизор </p>
              </div>
            </Col>
            <Col sm={3}>
              <div className={style.apartment__block}>
                <p>Санузел совмещен</p>
                <p>Душевая кабина</p>
                <p>Фен</p>
                <p>Бутылка воды</p>
                <p>Халат, тапочки</p>
              </div>
            </Col>
            <Col sm={4}>
              <div className={style.apartment__block}>
                <p>Чайник, чайный набор</p>
                <p> Лопатка и губка для обуви</p>
                <p>Мыло</p>
                <p>Туалетная бумага</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={11}>
              <div className={style.apartment__title}>
                <h3>Дополнительно:</h3>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={11}>
              <div className={style.apartment__text}>
                <p>Бесплатный wi-fi на ресепшен</p>
                <p>Холодильник на этаже</p>
                <p>Кулер с горячей/холодной водой на этаже</p>
                <p>Детская кроватка (по запросу)</p>
                <p>Гладильная комната</p>
                <p>Услуги прачечной</p>
                <p>Уборка номера – ежедневно, смена белья – раз в 6 дней и по мере загрязнения</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div >
      <div className={style.room_page__back}>
        <img src={background_room} alt="" />
      </div>
      </>
    </Trail>

  )
}

export default ApartmentStandart;
