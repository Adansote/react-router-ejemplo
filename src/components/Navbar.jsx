import{ NavLink} from "react-router-dom"


const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark  ">

            <div className="container d-flex justify-content-start  ">
            <img  className="p-2 m-2" src="/public/vite.svg"  alt="" />
            <NavLink className="btn btn-outline-primary p-2 m-2 " to="/">Inicio</NavLink>
            <NavLink className="btn btn-outline-primary p-2 m-2 " to="/contacto">Contacto</NavLink>
            <NavLink className="btn btn-outline-primary p-2 m-2 " to="/blog">Blog</NavLink>
            
  
        </div>  
        
           
            </div> 
    )  
}
export default Navbar;