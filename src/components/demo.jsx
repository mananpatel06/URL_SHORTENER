"use client"
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

function ShortUrlDetails({ shortUrlData }) {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

//   useEffect(() => {
//     if (shortUrlData) {
//       const clicksPerMonth = {};
//       shortUrlData.visitHistory.forEach((visit) => {
//         const month = new Date(visit.timestamp).getMonth(); // Get month (0-indexed)
//         clicksPerMonth[month] = (clicksPerMonth[month] || 0) + 1; // Count visits per month
//       });

//       const labels = Object.keys(clicksPerMonth);
//       const data = Object.values(clicksPerMonth);

//       setChartData({ labels, datasets: [{ label: 'Clicks per Month', data }] });
//     }
//   }, [shortUrlData]);

    if (shortUrlData) { // Check if shortUrlData is available
      const clicksPerMonth = {};
      console.log(shortUrlData)
      shortUrlData.visitHistory?.forEach((visit) => {
        const month = new Date(visit.timestamp).getMonth(); // Get month (0-indexed)
        clicksPerMonth[month] = (clicksPerMonth[month] || 0) + 1; // Count visits per month
      });
  
      const labels = Object.keys(clicksPerMonth);
      const data = Object.values(clicksPerMonth);
  
      setChartData({ labels, datasets: [{ label: 'Clicks per Month', data }] });
    }
  
  return (
    <div>
      <h2>{shortUrlData.full}</h2>
      <p>Clicks: {shortUrlData.clicks}</p>
      {shortUrlData.visitHistory.length > 0 && (
        <div>
          <h3>Visit History</h3>
          <ul>
            {shortUrlData.visitHistory.map((visit) => (
              <li key={visit._id}>
                {new Date(visit.timestamp).toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      )}
      {(
        <Bar data={chartData} options={{ maintainAspectRatio: false }} />
      )}
    </div>
  );
}

export default ShortUrlDetails;
