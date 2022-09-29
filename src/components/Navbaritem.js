function Navbaritem({button, isActive}) {
    return (
        <li className={isActive ? 'active' : ''}>{button}</li>
    )
}
export default Navbaritem;
