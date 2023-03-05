const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div>
      <img src={picture} alt="" />
      <p>
        First name: <span>{firstName}</span>
      </p>
      <p>
        Last name: <span>{lastName}</span>
      </p>
      <p>
        Gender: <span>{gender}</span>
      </p>
      <p>
        Height: <span>{height / 100}m</span>
      </p>
      <p>
        Birth: <span></span>
        {birth.toDateString()}
      </p>
    </div>
  );
};

export default IdCard;
