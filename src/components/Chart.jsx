import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Chart = ({data}) => {
  return (<>
  {    
   <div className="chart" style={{marginLeft:"13vh"}}>
  <LineChart width={790} height={310} data={data} 
    margin={{ top: 5, right: 30, left: 30, bottom: 5 }}>
    <CartesianGrid strokeDasharray="2 2" />
    <XAxis dataKey="t" tickFormatter={(value)=>new Date(value).toLocaleDateString()}/>
     <YAxis />
     <Tooltip />
     <Legend />
     <Line type="monotone" dataKey="h" stroke="blue" activeDot={{r:6}} />
     <Line type="monotone" dataKey="l" stroke="red" activeDot={{r:6}} />
   </LineChart>
   </div>
  }      
    </>
  )
}

export default Chart;