// const newMessage = "Santiago"; //! Se saca fuera de la función elementos que no se vayan a cambiar. Esto es más eficiente porque no se re-renderiza.

import PropTypes from "prop-types";
export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
FirstApp.defaultProps = {
  subTitle: "no hay subtitulo",
  name: "Sattog",
};
