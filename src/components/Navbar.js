import NavbarItem from './NavbarItem';

function Navbar() {

    const EXPLORAR_TEXT = 'Explorar';

    return (

        <div>

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt='Logo' className="w-6 ml-4 my-5" />
            <ul className="navbar-items">
                <NavbarItem text={'Inicio'} isActive={true} />
                <NavbarItem text={EXPLORAR_TEXT} />
                <NavbarItem text={'Notificaciones'} />
                <NavbarItem text={'Mensajes'} />
                <NavbarItem text={'Guardados'} />
                <NavbarItem text={'Listas'} />
                <NavbarItem text={'Más opciones'} />
            </ul>
        </div>
    )
}

export default Navbar;