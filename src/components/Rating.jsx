const Rating = ({ children }) => {
  let rating = '';
  let numberFilledStar = Math.round(children);
  let numberEmptyStar = 5 - Math.round(children);
  for (let i = 0; i < numberFilledStar; i++) {
    rating += '★';
  }
  for (let i = 0; i < numberEmptyStar; i++) {
    rating += '☆';
  }
  return (
    <div>
      <p>{rating}</p>
    </div>
  );
};

export default Rating;
