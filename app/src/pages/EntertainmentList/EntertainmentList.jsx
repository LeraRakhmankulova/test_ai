import style from '../EntertainmentList/index.module.sass';
import EntertainmentCard from '../../components/EntertainmentCard/EntertainmentCard';

import { Container, Row, Col } from 'react-bootstrap';
import { entertainmentItems } from '../../mocks/entertainment';
import Trail from '../../components/containers/NavigateAnimation';


const EntertainmentList = () => {
    const list = entertainmentItems;
    return (
        <Trail>
            <div className={style.relaxation_page}>
                <div className={style.relaxation_page__header}></div>
                <div className={style.relaxation_page__content}>
                    <Container fluid="sm">
                        <div className={style.relaxation_page__content__blocks}>
                            {list.map(item =>
                                <EntertainmentCard
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    description={item.description} />
                            )}
                        </div>
                    </Container>
                </div>
            </div>
        </Trail>
    );
}

export default EntertainmentList;