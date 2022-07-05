import style from '../TreatmentItem/index.module.sass';
import { Container, Row, Col } from 'react-bootstrap';
import ColoredLine from '../../components/ColorLine/ColorLine';
import Trail from '../../components/containers/NavigateAnimation';

const TreatmentItem = (props) => {
  return (
    <Trail>
      <div className={style.survey_page}>
      <div className={style.survey_page__header}></div>
        <div className={style.survey_page__content}>
          <Container fluid="sm">
            <Row className="justify-content-center">
              <Col sm={11}>
                <div className={style.text_line}>
                  <ColoredLine color='white' width={320} margin='auto' />
                  <h2>{props.title}</h2>
                  <ColoredLine color='white' width={320} margin='auto' />
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm={11}>
                <div className={style.survey_page__about}>
                  <div className={style.survey_page__about__image}>
                    <img src={props.image} alt="" />
                  </div>
                  <div className={style.survey_page__about__text}>
                    <h3>О процедуре:</h3>
                    <p>{props.description}</p> </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Trail>
  )
}

export default TreatmentItem;
