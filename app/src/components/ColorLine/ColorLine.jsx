import style from '../ColorLine/index.module.sass';

const ColoredLine = ({ color, width, margin }) => (
    <hr className={style.line_mobile}
        style={{
            color: color,
            backgroundColor: color,
            height: 0.2,
            width: width,
            margin: margin
        }}
    />
);

export default ColoredLine;