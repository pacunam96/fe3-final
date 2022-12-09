import React from "react";
import Card from "../Components/Card";
import { getFavFromStorage } from "../Components/utils/localStorage.service";

const Favs = () => {
  const DentistasFavoritos = getFavFromStorage();
  const reload= ()=>{
    window.location.replace('');
  }
  return (
    <>
      <h1>⭐Dentistas Favoritos⭐</h1>
      <div className="card-grid container">
        {DentistasFavoritos.length
          ? DentistasFavoritos.map((favs) => (
              <Card {...favs} key={favs.id} />
            ))
          : null}
          
      </div>
    </>
  );
};

export default Favs;