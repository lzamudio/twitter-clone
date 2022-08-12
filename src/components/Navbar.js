
function Navbar() {
    return (
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt='Logo'  className="w-6 ml-4 my-5"/>
            <ul className="navbar-items">
                <li className="active">Inicio</li>
                <li>Explorar</li>
                <li>Notificaciones</li>
                <li>Mensajes</li>
                <li>Guardados</li>
                <li>Listas</li>
                <li>Perfil</li>
                <li>Más opciones</li>
            </ul>
        </div>
    )
}

export default Navbar;