
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

// consumo de apis y en el blog se redirecciona en cada titulo y clases de bootstrap
const Blog = () => {

  const[searchParams, setSearchParams] = useSearchParams()
  const {data, loading,error}= useFetch("https://jsonplaceholder.typicode.com/posts")

  if(loading) return<p>Loading data.....</p>
  if(error)return<p>error....</p>


// validacion para el filtro
  const handleChange = (e) => {
    let filter = e.target.value 
    if(filter){
      setSearchParams({filter: filter})
    }  else{
      setSearchParams({})
    }
   
  }
    return(
        <>
        <h1>Blog</h1>
        <input placeholder="buscar" type="text"
         
         onChange={handleChange} 
         className="form-control my-3"
         value={searchParams.get("filter") || ""}
          />

        <ul className="list-group ">
        { data

        .filter((item) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = item.title.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        })
        
        .map((item) => (
            <Link to={`/blog/${item.id}`} key={item.id} className="list-group-item link-primary ">
              {item.id}- {item.title}
            </Link>
          ))
        }
        </ul>
       
        </>
    )
  }
export default Blog;