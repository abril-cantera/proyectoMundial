import { useEffect, useState } from "react"
import './GetSelection.css'
export function GetSelection() {
  //Esto se usa para guardar el array que nos viene en data de la api
  const [selection, setSelection] = useState([])
  const url = "http://localhost:3000/api/v1/selection"

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
    <div>
      <h2>Selection</h2>
      <div>
        {
          selection.map((selection) => <div key={selection.id}>
            <h2>{selection.nameEquipment}</h2>
            <img src={selection.image} alt="" />
          </div>)
        }
      </div>

    </div>
  );
}
