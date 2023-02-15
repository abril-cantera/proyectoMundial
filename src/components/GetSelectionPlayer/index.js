import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'


export function GetSelectionPlayer() {
  const { id } = useParams()
  console.log(id)

  const [players, setPlayers] = useState([])


  useEffect(() => {
    fetchApiSelection()
  }, [])

  const url = `http://localhost:5000/api/v1/selection/${id}`

  const fetchApiSelection = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setPlayers(data)
  }


  return (
    <div id="containerSelection" >
      <h2>Selection</h2>
      <div className="conteinerInfo">

        <div className="info" key={players.id}>
          <h2>{players.nameEquipment}</h2>
          {/* <img src={players.image} alt="Logo de la seleccion indicada" /> */}
          <div>
            <p>
              {
                players.map(item => console.log(item.nameEquipment))
              }
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
