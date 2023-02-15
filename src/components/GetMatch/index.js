import { useEffect, useState } from "react"
import '../styles.css'


export function GetMatch() {

  const [match, setMatch] = useState([])
  const url = 'http://localhost:5000/api/v1/match'

  const fetchApiMatch = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setMatch(data)
  }

  useEffect(() => {
    fetchApiMatch()
  }, [])

  return (
    <div id="containerMatch" >
      <h2>match</h2>
      <div className="conteinerInfo">
        {
          match.map((item) =>

            <div className="info" key={item.id}>
              <h3>{item.items.map(item =>

                <section key={item.id}>
                  <p>{item.nameEquipment}</p>
                  <p>{item.MatchSelection.goles}</p>
                </section>
              )}
              </h3>
            </div>)
        }
      </div>

    </div >
  );
}
