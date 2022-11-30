import "./ButtonStyling/ButtonMain.scss";

const Button = ({ buttonText, handleClick, buttonClass, repoLink }) => {
  return (
    <>
      <button className={buttonClass} onClick={handleClick}>
        {buttonText}
      </button>
    </>
  );
};

export default Button;
