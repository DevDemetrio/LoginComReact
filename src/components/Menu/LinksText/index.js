import "./LinksText.css";

const LinksText = (props) => {
  return (
    <li className="links__text">
      <a href="#">{props.links}</a>
    </li>
  );
};

export default LinksText;
