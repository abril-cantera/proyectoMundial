import { useEffect, useState } from "react"
import '../styles.css'


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
    <div id="containerGroup">
      <h2>Group</h2>
      <div className="conteinerInfo">
        {
          group.map((item) => <div className="info" key={item.id}>
            <h2>{item.nameGroup}</h2>
            <h3>{item.selection.map(item =>
              <section key={item.id}>
                <h4>{item.nameEquipment}</h4>
              </section>
            )}</h3>
          </div>)
        }
      </div>

    </div>
  );
}
