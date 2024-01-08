import {createContext,useContext} from "react";
import axios from "axios";
const URL ="https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/month/2023-01-09/2023-12-09?apiKey=r5SZ9oT9rVzsK1cgCZZpVhZSab6vl9Im"
import {useState,useEffect} from "react";
 const Context = createContext();
const AppProvider =({children})=>{
    const  [data,setData] = useState([]);
    useEffect(()=>{
axios.get(URL).then((response)=>setData(response.data.results)
    )},[])
return(
    <Context.Provider value={{data}}> 
    {children}
    </Context.Provider>
)
}
const useAppContext =() => {
    return useContext(Context);
  };
export {useAppContext,AppProvider};
