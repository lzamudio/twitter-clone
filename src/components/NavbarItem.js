
function NavbarItem({ text, isActive }) {
// function NavbarItem(props) {
  return (
    <li className={ isActive ? 'active': ''}>{text}</li>
  )
}

export default NavbarItem;




// const obj = {
//     nombre: 'luis',
//     apellidos: 'zamudio'
// }


// const obj_2 = obj
// obj_2.nombre
// obj_2.apellidos

// const { nombre, apellidos } = obj
// nombre
// apellidos