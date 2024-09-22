import React from 'react';
import { Row, Col, Progress } from "antd";
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale, // Import LinearScale
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import "../assests/css/dashboard.css";

export default function Index() {

  // Register the necessary components
  ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale, // Register LinearScale
    Title,
    Tooltip,
    Legend,
    ArcElement
  );

  const BarData = {
    labels: ['Project Planning Stage', 'Project initiation Stage', 'Clousre Stage', 'Monitor & Control', 'Execution Stage'],
    datasets: [
      {
        label: 'Number of hours',
        data: [3, 2, 2, 1, 5, 4],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
      },
    ],
  };

  const BarOptions = {
    indexAxis: 'y', // Ensures the bars are vertical
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const PieData = {
    labels: ['Project Planning Stage', 'Project initiation Stage', 'Clousre Stage', 'Monitor & Control', 'Execution Stage'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const PieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="chart-container">
      <div className="chart-left">
        <Row align='middle' justify='space-around' >
          <Col span={10} align='center'>
            <h3>Actual Cost</h3>
            <Progress
              type="dashboard"
              steps={{ count: 25, gap: 1 }}
              gapPosition={"bottom"}
              percent={75}
              strokeWidth={5}
            />
          </Col>
          <Col span={10} >
            <h2>Project Phase % Completed</h2>
            <Pie data={PieData} options={PieOptions} />
          </Col>
        </Row>
      </div>

      <div className="chart-left">
        <Row align='middle' justify='space-around' >
          <Col span={10} >
            <Bar data={BarData} options={BarOptions} />
          </Col>
          <Col span={10} >
            <h2>Project Phase % Completed</h2>
            <Pie data={PieData} options={PieOptions} />
          </Col>
        </Row>
      </div>
    </div>
  );
}