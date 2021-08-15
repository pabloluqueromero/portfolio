import React from 'react'
import { Link } from 'react-scroll'


const tabs: { tag: string, label: string, id: string }[] = [
  { tag: "about", label: "About", id: "" },
  { tag: "education", label: "Education", id: "" },
  { tag: "projects", label: "Projects", id: "" },
  { tag: "experience", label: "Experience", id: "" },
  { tag: "contact", label: "Contact", id: "" }
]
function NavBarOptions(props: { hideNavbar: () => void }) {

  return (
    <>
    {tabs.map((tab,index)=> {
    return <Link
      activeClass="navbar-item-active"
      style={{cursor:"pointer"}}
      to={tab.tag}
      spy={true}
      smooth={true}
      duration={300}
      key={`opt-${index}`}
      onClick={props.hideNavbar}
      className="navbar-item"
      id={tab.id}>
      <span>{tab.label}</span>
    </Link>})}
    </>
  )
}

export default NavBarOptions
