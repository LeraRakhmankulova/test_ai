import style from '../NewsCard/index.module.sass';
import { useNavigate } from 'react-router';

const NewsCard = (props) => {
    let navigate = useNavigate();
    const handleClick =() =>{
        navigate(`/news_item/${props.id}`);
    }
    return (
        <div className={style.news_card} onClick={handleClick}>
            <h5>{props.title}</h5>
            <div className={style.news_card__image}>
                <div> 
                    <img src={props.image} alt="" className={style.scale} />
                </div>
            </div>
            <div className={style.news_card__description}>
                {props.description}
            </div>
        </div>
    )
}

export default NewsCard;
