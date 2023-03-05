import './style.css';

const BoxColor = (props) => {
  const { r, g, b } = props;

  let rgbColor = `rgb(${r}, ${g}, ${b})`;

  const style = {
    background: rgbColor,
  };

  return (
    <div className="">
      <div
        className="box-color"
        // style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
        style={style}
      >
        <p>
          {rgbColor}
          {/* rgb({r}, {g}, {b}) */}
        </p>
        {/* <p>{hexValueT oDisplay}</p> */}
      </div>
    </div>
  );
};

export default BoxColor;
