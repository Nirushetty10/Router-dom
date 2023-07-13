import React, { PureComponent } from "react";
import {
  LineChart,
  Bar,
  BarChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";
import { PieChart, Pie, ResponsiveContainer, ComposedChart , Area } from 'recharts';

export default class Charts extends PureComponent {
  renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return (
      <text
        x={x + width / 2}
        y={y}
        fill="#666"
        textAnchor="middle"
        dy={-10}
      >{`${value}`}</text>
    );
  };



  render() {
    const data = [
      { name: "Page A", uv: 400, pv: 1400, amt: 2400 },
      { name: "Page B", uv: 900, pv: 1400, amt: 3000 },
      { name: "Page C", uv: 500, pv: 2700, amt: 1400 },
      { name: "Page D", uv: 1200, pv: 1000, amt: 1280 },
    ];
      
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    return (
      <div>
        {/* line chart */}
        <LineChart
      width={500}
      height={300}
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
        dataKey="pv"
        stroke="#4287f5"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#f542e3" />
      <Line type="monotone" dataKey="amt" stroke="#f5e342" />
    </LineChart>

        {/* bar chart */}

        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="name" tick={this.renderCustomAxisTick} />
          <YAxis />
          <Bar
            dataKey="uv"
            barSize={20}
            fill="#f542e3"
            label={this.renderCustomBarLabel}
          />
          <Bar
            dataKey="pv"
            barSize={20}
            fill="#4287f5"
            label={this.renderCustomBarLabel}
          />
          <Bar
            dataKey="amt"
            barSize={20}
            fill="#f5e342"
            label={this.renderCustomBarLabel}
          />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: "red" }} />
          <Legend
            width={100}
            wrapperStyle={{
              top: 0,
              right: 0,
            //   width : "100px",
              backgroundColor: "#f5f5f5",
              border: "1px solid #d5d5d5",
              borderRadius: 3,
              lineHeight: "10px",
            }}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="15 15" />
        </BarChart>

          {/* pie chart */}

          <div style={{ width: '100%', height: 400 ,display:"flex"}}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="uv" data={data} fill="#f542e3" label />
          </PieChart>
        </ResponsiveContainer>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="pv" data={data} fill="#4287f5" label />
          </PieChart>
        </ResponsiveContainer>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="amt" data={data} fill="#f5e342" label />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div style={{ width: '50%', height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="amt" fill="#f5e342" stroke="#8884d8" />
            <Bar dataKey="pv" barSize={20} fill="#4287f5" />
            <Line type="monotone" dataKey="uv" stroke="#f542e3" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      </div>
    );
  }
}
