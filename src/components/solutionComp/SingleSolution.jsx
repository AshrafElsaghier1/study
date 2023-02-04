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
      <h2 className="solution__title position-relative mb-3"> {title} </h2>
      <p>{text}</p>
    </div>
  );
};

export default SingleSolution;
