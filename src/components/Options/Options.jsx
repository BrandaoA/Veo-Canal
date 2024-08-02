import './Options.css'

const Options = () => {
  return (
    <div className="container">
      <p className="heading">Adjouter des options a mon abonnement CANAL+</p>
      <div className="mainContainer">
        <p className="text">Rechercher un decoder</p>
        <div className="inputBox1">
          <p className="inputHeading">Rechercher par</p>
          <input type="text" placeholder="Numero decodeur" />
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
export default Options