import style from '../NewsItem/index.module.sass';
import { Container, Row, Col } from 'react-bootstrap';
import Trail from '../../components/containers/NavigateAnimation';

const NewsItem = (props) => {
  return (
    <Trail>
      <div className={style.news_item}>
      <div className={style.news_item__header}></div>
        <Container fluid="sm" className={style.treatment_page__content}>
          <Row className="justify-content-center">
            <Col sm={11}>
              <div className={style.news_item__title}>
                <h3>{props.title}</h3>
              </div>
              <div className={style.news_item__content}>
                <img src={props.image} alt="" />
                <p>{props.description}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Trail>
  )
}

export default NewsItem;
