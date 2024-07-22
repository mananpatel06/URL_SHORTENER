import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ chartData }) => {
  

  const month = ["January", "February", "March", "April", "May", "June",
                   "July", "August", "September", "October", "November", "December"]

    const clicksPerMonth = {};
      // console.log(shortUrlData)
      chartData.visitHistory.forEach((visit) => {
        const month = new Date(visit.timestamp).getMonth(); // Get month (0-indexed)
        clicksPerMonth[month] = (clicksPerMonth[month] || 0) + 1; // Count visits per month
      });
  
      const monthdata = Object.keys(clicksPerMonth);
      const labels = monthdata.map((v) => month[v]);
      const clickData = Object.values(clicksPerMonth);
  
      // setChartData({ labels, datasets: [{ label: 'Clicks per Month', data }] });

    const [click, setClick] = useState([]);

    // const labels = ["1", "2", "3", "4", "5", "6", "7"];
  // const labels = chartData.visitHistory.map((d) => d.timestamp.getMonth() + 1);
  // const clickData = [65, 59, 80, 81, 56, 55, 40];
// const clickData = chartData.visitHistory.map((d) => d.timestamp.getMonth() + 1);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Total Clicks",
        data: clickData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
        scaleLabel: { 
          display: true,
          labelString: 'Month',
        },
        gridLines: {
          color: '#fff'
      }
      },
    },
  };

  return (
    <div className=" flex flex-col gap-3 h-full w-full">
      <h1>Month Wise Clicks</h1>
      <Bar data={data} options={config} />
    </div>
  );
};

export default Chart;

