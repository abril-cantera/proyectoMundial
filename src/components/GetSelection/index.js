import React, { useEffect, useState } from "react"
import '../../components/styles.css'
import { Link } from 'react-router-dom'

export function GetSelection() {

  const [selection, setSelection] = useState([])
  const url = "https://3.144.244.212:5000/api/v1/selection"

  const fetchApiSelection = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setSelection(data)
  }

  useEffect(() => {
    fetchApiSelection()
  }, [])


  return (
    <div className="containerPricipal" id="containerSelection" >
      <div className="containerCard">
        {
          selection.map((selection) => <div className="card" key={selection.id}>
            <Link to={`${selection.id}`} className='text'>
              {selection.nameEquipment}
            </Link>
            <img className="img" src={selection.image} alt="Logo de la seleccion indicada" />
          </div>)
        }
      </div>
    </div>
  );
}
