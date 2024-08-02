import { Link } from 'react-router-dom'
import './HomePage.css'
import { useRef, useState } from 'react';

 
const HomePage = () => {
  return (
    <div className="container">
      <p className="heading">Effectuer un reabonnement CANAL+</p>
      <div className="mainContainer">
        <p className="text">Rechercher un decoder a reabonner</p>
        <div className="inputBox1">
          <p className="inputHeading">Rechercher par</p>
          <select name="" id="inputText">
            <option value="Numero decodeur">Numero decodeur</option>
            <option value="Numero d'abonne">Numero d'abonne</option>
            <option value="Numero de telephone">Numero de telephone</option>
            <option value="Adresse email">Adresse email</option>
          </select>
        </div>
        <div className="inputBox2">
          <p className="inputHeading">Entre le numero de decoder</p>
          <input type="text" placeholder="Entre le numero de decoder" />
        </div>
        <button className="submit">afficher</button>
      </div>
    </div>
  )
}
export default HomePage