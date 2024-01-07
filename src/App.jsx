import React, { useEffect, useState } from 'react'
import Chart from "./components/Chart";
import "./App.css"
const App = () => {
  const  [data,setData] = useState([]);
  useEffect(()=>{
    const data = fetch("https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/month/2023-01-09/2023-12-09?apiKey=r5SZ9oT9rVzsK1cgCZZpVhZSab6vl9Im").then((result)=>{
      result.json().then((resp)=>{
        setData(resp.results); 
      })
    })
  },[])

  return (
    <>
    <h2 className='head'>Apple (AAPL) Stock Price 2023</h2>
    <h4>h for Highest -  l for Lowest</h4>
    <Chart data={data} className="chart"/>
    </>
  )
}

export default App;