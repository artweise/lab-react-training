import { useState } from 'react';

const RgbToHexParent = () => {
  const [hexValueToDisplay, setHexValueToDisplay] = useState('');
  console.log(props);
  // const [rState, setRState] = useState();
  // const makeStateFromProps = () => {
  //   setRState({ rState: props.r });
  // };

  let rgbColor = `rgb(${r}, ${g}, ${b})`;

  const valueToHex = (color) => {
    let hex = color.toString(16);
    return hex;
  };

  const rgbToHex = (r, g, b) => {
    return '#' + valueToHex(r) + valueToHex(g) + valueToHex(b);
  };

  setHexValueToDisplay(rgbToHex);

  return <div></div>;
};

export default RgbToHexParent;
