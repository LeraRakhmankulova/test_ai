
import TreatmentSlider from '../../components/TreatmentSlider/TreatmentSlider';
import Contraindications from '../../Contraindications/Contraindications';
import { Container, Row, Col } from 'react-bootstrap';
import style from '../TreatmentList/index.module.sass';
import Item from '../../components/Item/Item';
import { observer } from 'mobx-react-lite';
import { treatmentTable } from '../../mocks/treatments';
import background from '../../assets/treatment.png';
import Trail from '../../components/containers/NavigateAnimation';

const TreatmentList = observer(() => {
    const treatments = treatmentTable;
    return (
        <Trail>
            <div className={style.treatment_page}>
            <div className={style.treatment_page__header}></div>
                <div className={style.treatment_page__content}>
                    <Container fluid="sm" className={style.treatment_page__content}>
                        <Row className="justify-content-center">
                            <Col sm={11} className={style.welcome}>
                                <div className={style.treatment_page__title}>
                                    <h2>Виды предоставляемых медицинских услуг</h2>
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col sm={6} className={style.welcome}>
                                <div className={style.treatment_page__profiles}>
                                    <h4>Профили:</h4>
                                    <p>•    терапия</p>
                                    <p>•    педиатрия</p>
                                    <p>•    неврология</p>
                                    <p>•    кардиология</p>
                                    <p>•    пульмонология</p>
                                    <p>•    ревматология</p>
                                    <p>•    ортопедия и травматология</p>
                                    <p>•    профпатология</p>
                                    <p>•    Электрокардиография</p>
                                    <p>•    Обследование на аппарате «Кардиовизор»</p>
                                    <p>•    Глюкоза крови экспресс – методом</p>
                                </div>
                            </Col>
                            <Col sm={5} className={style.welcome}>
                                <div className={style.treatment_page__profiles}>
                                    <h4>Специалисты:</h4>
                                    <p> •    терапевт</p>
                                    <p> •    педиатр</p>
                                    <p> •    невролог</p>
                                    <p> •    кардиолог</p>
                                    <p> •    ортопед-травматолог</p>
                                    <p> •    профпатолог</p>
                                    <p> •    инструктор ЛФК</p>
                                    <h4>Виды обследования:</h4>
                                    <p>•    Электрокардиография</p>
                                    <p> •    Обследование на аппарате «Кардиовизор»</p>
                                    <p> •    Глюкоза крови экспресс – методом</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
{/* 
                    <div className={style.full_size}>
                        <img src={background} alt="" />
                    </div> */}

                    <div className={style.items__blocks}>
                        {treatments.map(item =>
                            (item.id < 4) ? (
                                <div className={style.items__block}>
                                    <Item
                                        navigate={`/treatment_item/${item.id}`}
                                        title={item.title}
                                        image={item.image} />
                                </div>) : <></>
                        )}
                    </div>
                    {/* {treatments.map(item =>
                        (item.id > 4) ? (
                            <TreatmentSlider
                                id={item.id}
                                title={item.title}
                                image={item.image} />):
                                <></>
                    )} */}
                    <Container fluid="sm" className={style.treatment}>
                        <Row className="justify-content-center">
                            <Col sm={11} className={style.help}>
                                <div className={style.help__title}>
                                    <h2>Виды санаторно-курортной помощи:</h2>
                                </div>
                                <div className={style.help__text}>
                                    <p>•    Климатолечение: воздушные ванны, солнечные ванны</p>
                                    <p>  •    Диетотерапия по показаниям: общий стол, щадящая диета, диабетическое меню, детское меню</p>
                                    <p>  •    Лечение питьевой минеральной водой</p>
                                    <p>  •    Фитотерапия (травяные чаи)</p>
                                    <p>  •    Оксигенотерапия (кислородный коктейль)</p>
                                    <p>  •    ЛФК с использованием лечебных пневмотренажеров (индивидуальные занятия и в группах)</p>
                                    <p>  •    Аппаратный массаж и пассивные тренажеры: механическая массажная кушетка «Ормед-релакс» со свинг-машиной, установка для кинезотерапии «Ормед-кинезо», кушетка бесконтактного массажа «Акварелакс», автоматический массаж стоп «Марутака», тренажер для вытяжки позвоночника « Air Nobius»</p>
                                    <p>  •    Водолечение:</p>
                                    <p>  - ванны (с морской солью и комплексом эфирных масел, йодобромные, скипидарные)</p>
                                    <p>  - ванна грязевая разводная (грязь в мешочке)</p>
                                    <p>  - аэрогидромассаж</p>
                                    <p>  - ручной подводный душ-массаж</p>
                                    <p>  - души (циркулярный, душ Шарко)</p>
                                    <p>  - подводная вытяжка позвоночника</p>
                                    <p>  •    Сухие углекислые ванны</p>
                                    <p>  •    Мини-сауна «Кедровая бочка»</p>
                                    <p>  •    Спелеотерапия (соляная комната)</p>
                                    <p>  •    Теплолечение:</p>
                                    <p>  - грязелечение: грязевые аппликации</p>
                                    <p>  - парафин, озокерит</p>
                                    <p>  •    Электролечение: д’Арсонвализация, электрофорез, СМТ,  УВЧ, ДМВ, гальванизация, электрофорез, электросон, транскраниальная электростимуляция, микрополяризация, мезодиэнцефальная модуляция, ультразвук, фонофорез, магнитотерапия</p>
                                    <p>  •    Светолечение: лазеротерапия, светолечение «Биоптрон», тубус-кварц</p>
                                    <p>  •    Ингаляции</p>
                                    <p>  •    Лечебный массаж</p>
                                    <p>  •    Другие виды ручного массажа</p>
                                    <p>  •    Прессотерапия</p>
                                    <p>  •    Солярий вертикальный</p>
                                    <p>  •    Услуги процедурного кабинета: внутривенная лазерная очистка крови, ультрафиолетовая очистка крови, инъекции (внутримышечные, внутривенные струйные, внутривенные капельные) с препаратами пациента</p>
                                    <p>  •    Первая скорая и неотложная медицинская помощь</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid="sm" className={style.treatment}>
                        <Row className="justify-content-center">
                            <Col sm={11} className={style.help}>
                                <div className={style.help__title}>
                                    <h2>Дополнительные медицинские услуги не входящие в базовую стоимость путевки</h2>
                                </div>
                                <div className={style.help__text}>
                                    <p>•    Обследование на аппарате «Кардиовизор»</p>
                                    <p> •    Подводная вытяжка позвоночника</p>
                                    <p> •    Ручной подводный душ-массаж</p>
                                    <p> •    Аэрогидромассаж</p>
                                    <p> •    Аппаратный массаж и пассивные тренажеры:  установка для кинезотерапии «Ормед-кинезо», кушетка бесконтактного     массажа «Акварелакс», тренажер для вытяжки позвоночника « Air Nobius»</p>
                                    <p> •    Ванна грязевая разводная (грязь в мешочке)</p>
                                    <p> •    Прессотерапия</p>
                                    <p> •    Лазеротерапия</p>
                                    <p> •    Солярий</p>
                                    <p> •    Все виды ручного массажа, кроме классического лечебного</p>
                                    <p> •    Все лечебные комплексы, представленные в прейскуранте на медицинские услуги</p>
                                    <p> •    Услуги процедурного кабинета</p>
                                    <p> •    Назначение любой процедуры свыше количества и перечня указанного в программе санаторно-курортного лечения по основному заболеванию </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Contraindications />
                </div>
            </div>
        </Trail>
    );
});

export default TreatmentList;