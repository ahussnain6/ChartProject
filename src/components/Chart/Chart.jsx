import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useAppContext } from '../Hooks/useFetch.jsx';
const Chart = () => {
  const {data} = useAppContext();
  return (<>
  {    
    <ResponsiveContainer width="100%" height={300}>
  <LineChart  data={data} 
    margin={{ top: 5, right: 30, left: 30, bottom: 5 }}>
    <CartesianGrid strokeDasharray="2 2" />
    <XAxis dataKey="t" tickFormatter={(value)=>new Date(value).toLocaleDateString()}/>
     <YAxis />
     <Tooltip />
     <Legend />
     <Line type="monotone" dataKey="h" stroke="blue" label="highest" activeDot={{r:6}} />
     <Line type="monotone" dataKey="l" stroke="red" activeDot={{r:6}} />
   </LineChart>
    </ResponsiveContainer>
  }      
    </>
  )
}

export default Chart;
