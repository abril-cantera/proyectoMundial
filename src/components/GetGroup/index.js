import { useEffect, useState } from "react"
import './GetGroup.css'

export function GetGroup() {

  const [group, setGroup] = useState([])
  const url = "http://localhost:5000/api/v1/group"

  const fetchApiGroup = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setGroup(data)
  }

  useEffect(() => {
    fetchApiGroup()
  }, [])

  return (
    <div id="containerGroup" className="containerGroup">
      <h2>Group</h2>
      <div className="conteinerInfoGroup">
        {
          group.map((item) => <div className="infoGroup" key={item.id}>
            <h2>{item.nameGroup}</h2>
            <h3>{item.selection}</h3>

          </div>)
        }
      </div>

    </div>
  );
}
