
import { useParams } from "react-router-dom";
import {useFetch} from "../hooks/useFetch"

//utilizando el hook useparams para los detalles de los titulos contendio de cada titulo
//rta con parametros
const BlogDetails = () => {
    const params = useParams()

    const {data, loading, error}= useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    if(loading) return<p>Loading data.....</p>
  if(error)return<p>error....</p>
    return(
   <>
   <h1>{data.id} - {data.title}</h1>
   <p>{data.body}</p>
   </>
    )
  
}
export default BlogDetails;