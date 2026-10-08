/* Este componente muestra la fuerza y el boton para aumentarla. */
function FuerzaJedi({ fuerza, setFuerza }) {
  function alAumentar() {
    setFuerza(valorActual => valorActual + 1)
  }

  return (
    <section>
      <h2>Fuerza Jedi</h2>
      <p>Fuerza actual: {fuerza}</p>
      <button type="button" onClick={alAumentar}>
        Aumentar fuerza
      </button>
    </section>
  )
}

export default FuerzaJedi