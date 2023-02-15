import React, { useEffect, useState } from "react"
import '../../components/styles.css'
import { Link } from 'react-router-dom'

export function GetSelection() {

  const [selection, setSelection] = useState([])
  const url = "http://localhost:5000/api/v1/selection"

  const fetchApiSelection = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setSelection(data)
  }

  useEffect(() => {
    fetchApiSelection()
  }, [])


  return (
    <div id="containerSelection" >
      <h2>Selection</h2>
      <div className="conteinerInfo">
        {
          selection.map((selection) => <div className="info" key={selection.id}>
            <Link to={`${selection.id}`}>
              {selection.nameEquipment}
            </Link>
            {/* <img src={selection.image} alt="Logo de la seleccion indicada" /> */}
            <button>Ver 🔎</button>
          </div>)
        }
      </div>
    </div>
  );
}
