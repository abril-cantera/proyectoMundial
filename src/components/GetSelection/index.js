import { useEffect, useState } from "react"
import './GetSelection.css'

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
    <div id="containerSelection" className="containerSelection">
      <h2>Selection</h2>
      <div className="conteinerInfoSelection">
        {
          selection.map((selection) => <div className="infoSelection" key={selection.id}>
            <h2>{selection.nameEquipment}</h2>
            <img src={selection.image} alt="Logo de la seleccion indicada" />
            <button>Ver 🔎</button>
          </div>)
        }
      </div>

    </div>
  );
}
