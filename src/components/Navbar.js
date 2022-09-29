import Navbaritem from "./Navbaritem";
function Navbar() {
    return (
    
        <div>
           
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt='Logo' className="w-6 ml-4 my-5" />
            <ul className="navbar-items">
                <Navbaritem button="Inicio" isActive={true} />
                <Navbaritem button={'Explorar'} />
                <Navbaritem button="Notificaciones" />
                <Navbaritem button="Mensajes" />
                <Navbaritem button="Guardados" />
                <Navbaritem button="Lisas" />
                <Navbaritem button="Más Opciones" />
                { }
            </ul>
        </div>
    )
}

export default Navbar;