import "./solution.scss";
const SingleSolution = ({ bgColor, iconImg, title, text }) => {
  return (
    <div className="single__solution-inner">
      <div
        className="icon__container d__flex-center mb-3"
        style={{ background: bgColor }}
      >
        <img src={iconImg} draggable="false" />
      </div>
      <span className="solution__title position-relative mb-3 d-block">
        {title}
      </span>
      <span>{text}</span>
    </div>
  );
};

export default SingleSolution;
