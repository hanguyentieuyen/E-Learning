import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Enroll rate",
      data: [33, 53, 50, 41, 44, 30],
      fill: false,
      backgroundColor: "#FFB1C1",
      borderColor: "#FFB1C1",
      tension: 0.4,
    },
    {
      label: "Active rate",
      data: [33, 25, 35, 51, 54, 30],
      fill: true,
      borderColor: "#7983ff",
      backgroundColor: "#E9EAFF",
      pointBorderColor: "transparent",
      pointBorderWidth: 4,
      tension: 0.4,
    },
  ],
};

const option = {
  responsive: true,
  plugins: {
    legend: true,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      min: 10,
      max: 70,
      ticks: {
        stepSize: 10,
      },
    },
  },
};

const ChartLine = () => {
  return (
    <div
      className="chart-line-wrapper card"
      style={{ width: "100%", margin: "0 auto" }}
    >
      <div className="card-header">User Activity</div>
      <div className="card-body">
        <Line data={data} options={option} />
      </div>
    </div>
  );
};

export default ChartLine;
