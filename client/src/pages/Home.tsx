import { ReactElement } from "react";
import "./styles/Home.scss";
import mascotImage from "../assets/mascot.png";
import { Link } from "react-router-dom";

export default function Home(): ReactElement {
  return (
    <div className="home">
      <h1>questions game</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis
        quos provident architecto,
      </p>
      <img src={mascotImage} alt="QA game mascot" />
      <Link to="/upload">
        <button>Commencer le jeu</button>
      </Link>
    </div>
  );
}
