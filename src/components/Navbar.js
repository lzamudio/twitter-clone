<<<<<<< HEAD
import Navbaritem from "./Navbaritem";
=======
import NavbarItem from './NavbarItem';

>>>>>>> fe643d093e0ceb348c77ddf90ae5489a9cfacc14
function Navbar() {

    const EXPLORAR_TEXT = 'Explorar';

    return (
    
        <div>
           
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt='Logo' className="w-6 ml-4 my-5" />
            <ul className="navbar-items">
<<<<<<< HEAD
                <Navbaritem button="Inicio" isActive={true} />
                <Navbaritem button={'Explorar'} />
                <Navbaritem button="Notificaciones" />
                <Navbaritem button="Mensajes" />
                <Navbaritem button="Guardados" />
                <Navbaritem button="Lisas" />
                <Navbaritem button="Más Opciones" />
                { }
=======
                <NavbarItem text={ 'Inicio' } isActive={true} />
                <NavbarItem text={ EXPLORAR_TEXT }/>
                <NavbarItem text={ 'Notificaciones' } />
                <NavbarItem text={ 'Mensajes' } />
                <NavbarItem text={ 'Guardados' } />
                <NavbarItem text={ 'Listas' } />
                <NavbarItem text={ 'Más opciones' } />
>>>>>>> fe643d093e0ceb348c77ddf90ae5489a9cfacc14
            </ul>
        </div>
    )
}

export default Navbar;