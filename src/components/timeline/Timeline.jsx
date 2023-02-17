import "./timeline.scss";

const timelineData = [
  {
    title: "Market Research",
    text: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua.",
  },
  {
    title: "Market Research",
    text: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua.",
  },
  {
    title: "Market Research",
    text: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua.",
  },
];

const Timeline = () => {
  return (
    <>
      {timelineData.map(({ title, text }, index) => (
        <li className="timeline__item" key={index}>
          <p data-count="1">{title}</p>
          <span>{text}</span>
        </li>
      ))}
    </>
  );
};

export default Timeline;
