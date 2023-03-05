import './style.css';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const style = {
    background: bgColor,
    color: color,
  };

  return (
    <div>
      <div className="card-box" style={style}>
        <h1>{type}</h1>
        <h1>•••• •••• •••• {number.slice(-4)}</h1>
        <h3>
          Expires {expirationMonth}/{expirationYear} <span>{bank}</span>{' '}
        </h3>
        <h1>{owner}</h1>
      </div>
    </div>
  );
};

export default CreditCard;
