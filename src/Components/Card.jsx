import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {  setFavInStorage,   isFavorited, removeFavInStorage } from "./utils/localStorage.service";
import { ContextGlobal } from "./utils/global.context";
import styles from "../index.css";
import { Heart, Trash } from "react-bootstrap-icons";

const Card = ({ id, name, username }) => {
  const [favorite, setFavorite] = useState(() => isFavorited(id));
  const { theme } = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;

  const isFavorite = (favorite) => {
    setFavorite(favorite);
  };

  const addFav = () => {
    const favorite = setFavInStorage({ id, name, username });
    isFavorite(favorite);
  };

  const removeFav = () => {
    const favorite = removeFavInStorage(id);
    isFavorite(favorite);
  };

  return (
    <div className={`card ${isDarkMode ? styles.cardDark : ""}`}>
      <img className="card-img-top" src="/images/doctor.jpg" alt="doctor placeholder"/>
      <div className={`card-body ${styles.CardBody}`}>
        <Link to={`/users/${id}`}>
          <h3>{name}</h3>
        </Link>
        <h1 className="name2">{username}</h1>
        <button onClick={favorite ? removeFav : addFav} className={`btn btn-${isDarkMode ? "dark" : "light"} ${styles.favButton}`}>
          {favorite ? <Trash color="#f50057" size={20} /> :<Heart color="#f50057" size={20}/>}
        </button>
      </div>
    </div>
  );
};

export default Card;