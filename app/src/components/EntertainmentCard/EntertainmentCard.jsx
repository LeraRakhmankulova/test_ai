import style from '../EntertainmentCard/index.module.sass';
import { useNavigate } from 'react-router';

const EntertainmentCard = (props) => {
  let navigate = useNavigate();
  const handleClick = () =>{
    navigate(`/entertainment_item/${props.id}`);
  }
  return (
    <div className={style.relaxation_item} onClick={handleClick}>
      <div className={style.relaxation_item__wrapper}>
        <div className={style.relaxation_item__title}>
          <h4>{props.title}</h4>
        </div>
        <div className={style.relaxation_item__image}>
          <div className={style.relaxation_item__more}>
            <h5>Подробнее...</h5>
          </div>
          <img src={props.image} alt="" className={style.scale} />
        </div>
        <div className={style.relaxation_item__text}>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default EntertainmentCard;
