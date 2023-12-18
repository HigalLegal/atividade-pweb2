import { useState } from "react"

function App() {

  const [contador, setContador] = useState(0);

  return (
    <>

      <h1>Higor Morais Dev</h1>
      <button onClick={() => { setContador(contador + 1)}}>Aumentar número.</button>
      <h3>{ contador }</h3>

    </>
  )
}

export default App
