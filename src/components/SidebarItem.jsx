/* eslint-disable react/prop-types */
import { useState } from "react"

export default function SidebarItem({item}) {
    const [open, setOpen] = useState(false)

    if(item.children) {
        return (
            <div className={ open ? "sidebar-item open" : "slidebar-item"}>
                <div className="sidebar-title">
                    <span>
                        { item.title }   
                        { item.icon && <i className={item.icon}></i> } 
                    </span> 
                    <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
                </div>  
                <div className="sidebar-content">
                    { item.children.map((child, index) => <SidebarItem key={index} item={child} />) }
                </div>          
            </div>
        )
    } else {
        return (
            <a href={item.path || "#"} className="sidebar-item plain">
                <span className="sidebar-title">
                    {item.title}
                </span>                      
            </a>
        )
    }
}