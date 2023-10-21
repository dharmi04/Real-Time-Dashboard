import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const Dashboard = () => {
  const [coordinates, setCoordinates] = useState([]);

  const data=[
    {name:"G1", value1:200, value2:900},
    {name:"G2", value1:270, value2:70},
    {name:"G3", value1:100, value2:90},
    {name:"G4", value1:800, value2:980},
    {name:"G5", value1:900, value2:500},
    {name:"G6", value1:1000, value2:300},
    {name:"G7", value1:150, value2:700},
    {name:"G8", value1:1890, value2:800},
  ]
  return (
    <div>
      <h1>Coordinate Dashboard</h1>
      <LineChart
      width={800}
      height={500}
      data={data}
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
        dataKey="value2"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="value1" stroke="#82ca9d" />
    </LineChart>
    </div>
  );
};

export default Dashboard;
