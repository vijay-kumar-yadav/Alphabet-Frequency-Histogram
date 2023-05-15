import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function HistogramChart({ data }) {
  const xAxisField = "letter";
  const yAxisField = "frequency";
  const label ={
    x: 'WORDS',
    y: 'FREQUENCY',
  }
  const [chartWidth, setChartWidth] = useState(700);
  const [chartHeight, setChartHeight] = useState(500);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setChartWidth(300);
        setChartHeight(300);
      } else if (window.innerWidth < 992) {
        setChartWidth(600);
        setChartHeight(400);
      } else {
        setChartWidth(700);
        setChartHeight(500);
      }
    };

    handleResize();

    return () => {
    };
  }, []);
  
  return (
    <div className="chart-container">
      <BarChart
        width={chartWidth}
        height={chartHeight}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey={xAxisField}
          label={{ value: label.x, dy: 18}}
          margin={{ bottom: 10 }}
        />
        <YAxis
          dataKey={yAxisField}
          label={{ value: label.y, angle: -90, dx: -18 }}
          margin={{ left: 10 }}
        />
        <Tooltip color='#82ca9d'/>
        <Legend wrapperStyle={{paddingTop : 20}}/>
        <Bar dataKey={yAxisField} fill="#8884d8" />
      </BarChart>
    </div>
  );
}
