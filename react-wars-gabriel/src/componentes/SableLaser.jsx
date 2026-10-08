/*Este modulo muestra el sable y su color*/
function SableLaser({ fuerza }) {
    //Para mas variedad de color he buscado los colores en hexadecimal 
    //https://htmlcolorcodes.com/es/ = Pagina de colores
  const colores = ["#22d3ee", "#60a5fa", "#a78bfa", "#f87171", "#4ade80"]
  const color = colores[fuerza % colores.length]

  return (
    <section>
      <h2>Tu sable láser</h2>
        {/*Le pedi sugerencias a la ia para el sable y me ayudo a montar una figura de sable son svg
        me dio los datos */}
      <svg
        viewBox="0 0 260 90"
        role="img"
        aria-label={`Sable láser de color ${color}`}
      >
        <rect x="20" y="37" width="185" height="16" rx="8" fill={color} />
        <rect x="190" y="30" width="18" height="30" rx="4" fill="#cbd5e1" />
        <rect x="208" y="35" width="38" height="20" rx="5" fill="#475569" />
      </svg>
    </section>
  )
}

export default SableLaser