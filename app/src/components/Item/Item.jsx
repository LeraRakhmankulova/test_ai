import style from '../Item/index.module.sass';
import { useNavigate } from 'react-router-dom';


const Item = (props) => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate(`${props.navigate}`);
      };
    return (
        <div className={style.scale} onClick={handleClick}>
            <div className={style.title}>
                <h3>{props.title}</h3>
            </div>
            <img src={props.image} className={style.scale} alt='' />
        </div>
    )
}
export default Item;
