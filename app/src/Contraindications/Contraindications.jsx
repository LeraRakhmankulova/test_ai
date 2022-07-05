import style from '../Contraindications/index.module.sass';
import Trail from '../components/containers/NavigateAnimation';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import svg from '../assets/doc.svg';

const Contraindications = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div >
            <div className={style.document} onClick={() => setVisible(!visible)}>
                <Container fluid="sm">
                    <Row className="justify-content-center">
                        <Col sm={11} className={style.document__content}>
                            <div className={style.document__content__logo}>
                                <img src={svg} alt="" />
                            </div>
                            <div className={style.document__content__name} >
                                <h5>Противопоказания</h5>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {visible ?
                (<div className={style.document__info}>
                    <Trail>
                        <Container fluid="sm">
                            <Row className="justify-content-center">
                                <Col sm={11} >
                                    <div >
                                        <h4>Общие противопоказания,  исключающие  направление больных в санаторий</h4>
                                        <br />
                                        <p> 1. Все заболевания в острой стадии, хронические заболевания в стадии обострения и осложненные острогнойным процессом;</p>
                                        <p> 2. Острые инфекционные заболевания до окончания срока изоляции;</p>
                                        <p> 3. Все венерические заболевания в острой и заразной стадии;</p>
                                        <p> 4. Все болезни крови в острой стадии и стадии обострения;</p>
                                        <p> 5. Кахексия любого происхождения;</p>
                                        <p> 6. Злокачественные и доброкачественные новообразования*;</p>
                                        <p> 7. Все заболевания и состояния, требующие стационарного лечения, в том числе и хирургического вмешательства, все заболевания, при которых больные не способны к самостоятельному передвижению и самообслуживанию, нуждаются в постоянном специальном уходе (кроме лиц, подлежащих лечению в специализированных санаториях для спинальных больных);</p>
                                        <p> 8. Эхинококк любой локализации;</p>
                                        <p> 9. Кровотечения;</p>
                                        <p> 10. Беременность с токсикозами**;</p>
                                        <p> 11. Все формы туберкулеза в активной стадии – для любых курортов и санаториев нетуберкулезного профиля;</p>
                                        <p> 12. Тиреотоксикоз тяжелой степени, а также с выраженными осложнениями (тиреотоксическое сердце и др.);</p>
                                        <p> 13. Сахарный диабет в стадии декомпенсации, а также при лабильном течении (частые гипогликемические состояния)***;</p>
                                        <p> 14. Эндокринное ожирение органического генеза (опухоли эндокринных желез) и любые формы ожирения IV степени при недостаточности кровообращения выше II А ст;</p>
                                        <p> 15. Узловой зоб.</p>
                                        <p> 16. Узловая мастопатия.</p>
                                        <p> Примечание:</p>
                                        <p> * Вопрос о возможности направления больных, перенесших радикальные методы лечения по поводу злокачественных и доброкачественных новообразований, в профилакторий для отдыха и климатотерапии, решается консультативно с онкологами.</p>
                                        <p> ** Беременные принимаются на отдых во все сроки при стабильном течении беременности и без осложнений после консультации врача акушер-гинеколога.</p>
                                        <p> *** Не противопоказано лечение пациентов с сопутствующим сахарным диабетом 1 и 2 типа – компенсированным, без склонности к кетоацидозу на фоне адекватной медикаментозной терапией, при отсутствии осложнений или с минимальными их проявлениями.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Trail>
                </div>) : <></>}
        </div>
    )
}

export default Contraindications;