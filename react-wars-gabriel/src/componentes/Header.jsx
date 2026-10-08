/*Este componenet se encarga de saludar al jedi*/
export default function header({nombre}){
    return(
        <header>
            <h1>Bienvenido jedi {nombre}</h1>
            <p>Tu entrenamiento Jedi comienza ahora...</p>
        </header>
    )
}

