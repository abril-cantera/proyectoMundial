import { useEffect } from "react"

function App() {
  const url = "http://localhost:3000/api/v1/selection"
  const fetchApiSelection = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
  }
  useEffect(() => {
    fetchApiSelection()
  }, [])

  return (
    <h4>Hola</h4>
  );

}

export default App;
