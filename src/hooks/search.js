import React,{useState,useEffect} from "react" 
import axios from "axios"

const Search = (endpoint,id)=>{

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState("")

    useEffect(()=>{
        setLoading(true)
        axios.get(`https://my-json-server.typicode.com/tractian/fake-api/${endpoint}/${id}`)
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            setError(err)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[endpoint,id])

    return {data,loading,error}
}

export default Search