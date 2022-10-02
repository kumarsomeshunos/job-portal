import "./widget.scss";
import NumbersIcon from '@mui/icons-material/Numbers';

const Widget = (props) => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{props.title}</span>
        <span className="counter">{props.counter}</span>
        {/* <span className="link">{data.link}</span> */}
      </div>
      <div className="right">
        <div className="percentage positive">
          <NumbersIcon />
        </div>
      </div>
    </div>
  );
};

export default Widget;
