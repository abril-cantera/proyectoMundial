import { useEffect, useState } from "react"
import '../styles.css'


export function GetMatch() {

  const [match, setMatch] = useState([])
  const url = 'http://3.18.161.85:5000/api/v1/match'

  const fetchApiMatch = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setMatch(data)
  }

  useEffect(() => {
    fetchApiMatch()
  }, [])

  return (
    <div className="containerPricipal" id="containerMatch" >
      <div className="containerCard">
        {
          match.map((item) =>

            <div className="card" key={item.id}>
              <h3>{item.items.map(item =>

                <section className="text" key={item.id}>
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
