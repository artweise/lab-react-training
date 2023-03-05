const Greetings = (props) => {
  return (
    <div>
      {props.lang === 'en' && <h3>Hello, {props.children}</h3>}
      {props.lang === 'es' && <h3>Hello, {props.children}</h3>}
      {props.lang === 'fr' && <h3>Hello, {props.children}</h3>}
      {props.lang === 'de' && <h3>Hello, {props.children}</h3>}
    </div>
  );
};

export default Greetings;
