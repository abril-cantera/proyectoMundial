import { useEffect, useState } from "react"
import '../styles.css'


export function GetPlayer() {

  const [player, setPlayer] = useState([])
  const url = "http://localhost:5000/api/v1/player"

  const fetchApiPlayer = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setPlayer(data)
  }

  useEffect(() => {
    fetchApiPlayer()
  }, [])

  return (
    <div id="containerPlayer" >
      <h2>Player</h2>
      <div className="conteinerInfo">
        {
          player.map((player) => <div className="info" key={player.id}>
            <h2>{player.namePlayer}</h2>
            <img src={player.image} alt="Logo de la seleccion indicada" />
            <p>{player.description}</p>
            <p>{player.position} - {player.number}</p>
            <button>Ver 🔎</button>
          </div>)
        }
      </div>

    </div>
  );
}
