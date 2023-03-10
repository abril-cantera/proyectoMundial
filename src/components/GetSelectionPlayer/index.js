import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles.css'


export function GetSelectionPlayer() {
  const { id } = useParams()

  const [players, setPlayers] = useState([])


  useEffect(() => {
    fetchApiSelection()
  }, [])

  const url = `http://3.144.244.212:5000/api/v1/selection/${id}`

  const fetchApiSelection = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setPlayers(data)
  }


  return (
    <div className='containerPricipal' id="containerSelection" >
      <div>
        <div key={players.id}>
          <section className='titleAndImg'>
            <h2 className='text'>{players.nameEquipment}</h2>
            <img className="logo" src={players.image} alt="Logo de la seleccion indicada" />
          </section>
          {
            <section className='containerCard'>
              {players.player?.map(item =>
                <section className="card" key={item.id}>
                  <h4 className='text2'>{item.namePlayer}</h4>
                  <p className='text3'>{item.position} - {item.number}</p>
                  <img className="img" src={item.image} alt="Imagen de perfil del jugador" />
                </section>
              )}
            </section>
          }
        </div>
      </div>
    </div>
  );
}
