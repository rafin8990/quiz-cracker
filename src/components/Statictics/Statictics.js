import React, { useEffect, useState ,PureComponent} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statictics = () => {
    const [chart,setChart]=useState([])
    console.log(chart)
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res=>res.json())
        .then(data=>setChart(data.data))
    },[setChart])
    return (
        <div className='flex justify-center items-center'>
            <LineChart
        width={500}
        height={300}
        data={chart}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="total"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
        </div>
    );
};

export default Statictics;