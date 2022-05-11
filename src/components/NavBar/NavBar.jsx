//import { useState } from "react"
import Dropdown from "../Dropdown/Dropdown"
import { nav } from "../../mock/mockHeaderNav"
import LinkElements
  from "../../elements/LinkElements/LinkElements"
import ListElements
  from "../../elements/ListElements/ListElements"

export const NavBar = () => {
 // const [selectedValue, setSelectedValue] = useState(nav[0].name)

  return (
    <div className="header-navbar">
     <ul className='flex'> {nav.map((el) => <ListElements key={el.id} className='mr-12'>   
       {el.submenu
         ? <Dropdown options={el.submenu}
           selectedValue={nav[0].name}
         //  setSelectedValue={setSelectedValue}
           classNameContainer='z-100 absolute w-72 pt-5 bg-transparent'
           classNameli='mb-3 hover:text-yellow'
           classNameUl="bg-bgColor p-3 border-solid border-2 border-gray rounded-lg"
         />
         
         : <LinkElements href={el.href} className='hover:text-yellow'>{el.name}</LinkElements>}
      </ListElements>)}</ul>  
    </div>)
 }

export default NavBar