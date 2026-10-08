import { useEffect, useState } from 'react'
import './App.css'
import Header from './componentes/Header.jsx'
import FuerzaJedi from './componentes/FuerzaJedi.jsx'
import SableLaser from './componentes/SableLaser.jsx'

function App() {
  const [fuerza, setFuerza] = useState(0)

  useEffect(() => {
    if (fuerza > 10) {
      console.log('¡La Fuerza es poderosa en ti, joven Padawan!')
    }
  }, [fuerza])

  useEffect(() => {
    return () => {
      console.log('El Jedi ha dejado la academia')
    }
  }, [])

  return (
    <>
      <Header nombre="Gabriel" />
      <FuerzaJedi fuerza={fuerza} setFuerza={setFuerza} />
      <SableLaser fuerza={fuerza} />
    </>
  )
}

export default App