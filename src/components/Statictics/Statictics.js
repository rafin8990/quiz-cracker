import React, { useEffect, useState ,PureComponent} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import pic3 from '../../pic3.webp'
const Statictics = () => {
    const [chart,setChart]=useState([])
    console.log(chart)
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res=>res.json())
        .then(data=>setChart(data.data))
    },[setChart])
    return (
        <div>
          <div>
          <div className='md:flex justify-around items-center'>
            <div className='p-5'>
              <img className='shadow' src={pic3} alt="" />
            </div>
            <div className='m-5'>
              <h1 className='lg:text-6xl sm:text-5xl font-bold text-orange-800'>All Quiz Chart Here</h1>
              <h3 className='text-xl text-gray-600 mt-2'>Do not frustreted !!! Keep practicing .</h3>
              <p className='text-gray-400'>Computer programming is the process of performing a particular computation (or more generally, accomplishing a specific computing result), usually by designing and building an executable computer program. </p>
            </div>
          </div>
          </div>
          {/* line chart  */}
          <div>
            <h1 style={{textAlign:'center'}} className='text-4xl m-5 text-orange-800 font-bold'>
              Total Quiz Line Chart Given below:
            </h1>
          </div>
          <div className='flex justify-center items-center pr-5'>
            
            <LineChart
                      width={400}
                      height={300}
                      data={chart}
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
      </LineChart>
      
        </div>
        </div>
    );
};

export default Statictics;