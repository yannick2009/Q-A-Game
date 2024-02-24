import { ReactElement } from "react";
import "./styles/NotFound.scss";
import { Link } from "react-router-dom";
import warningImage from "../assets/warning.png";

export default function NotFound(): ReactElement {
  return (
    <div className="not-found">
      <h1>questions game</h1>
      <img src={warningImage} alt="" />
      <p>Tu vas ou ?! retourne à la page d'acceuil</p>
      <Link to="/">
        <button>Page d'acceuil</button>
      </Link>
    </div>
  );
}
