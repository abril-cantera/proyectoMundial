import { useEffect, useState } from "react"
import '../styles.css'


export function GetGroup() {

  const [group, setGroup] = useState([])
  const url = "https://3.144.244.212:5000/api/v1/group"

  const fetchApiGroup = async () => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      }

    })
    const data = await response.json()
    setGroup(data)
  }

  useEffect(() => {
    fetchApiGroup()
  }, [])

  return (
    <div className="containerPricipal" id="containerGroup">
      <h2 className="text">Face de Grupo</h2>
      <div className="containerCard">
        {
          group.map((item) =>
            <div className="card" key={item.id}>
              <h2 className="text2">{item.nameGroup}</h2>
              <section>
                {item.selection.map(item =>
                  <section key={item.id}>
                    <h4 className="text3">{item.nameEquipment}</h4>
                  </section>
                )}
              </section>
            </div>)
        }
      </div>

    </div>
  );
}
