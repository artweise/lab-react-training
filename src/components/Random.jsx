const Random = ({ min, max }) => {
  // getRandomNumber(props.min, props.max) {
  //     return Math.random() * (props.max - props.min) + props.min;
  // }
  return (
    <div>
      <h3>
        Random value between {min} and {max} =
        {Math.floor(Math.random() * (max - min) + min)}
      </h3>
    </div>
  );
};

export default Random;
