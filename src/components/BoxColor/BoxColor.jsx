import './style.css';
const BoxColor = ({ r, g, b }) => {
  return (
    <div className="">
      <div
        className="box-color"
        style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
      >
        <p>
          rgb({r}, {g}, {b})
        </p>
        <p>#ff0000</p>
      </div>
    </div>
  );
};

export default BoxColor;
