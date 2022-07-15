import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "Jul",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45, 25, 10, 5, 8],
      borderRadius: 15,
    },
    {
      label: "Second dataset",
      backgroundColor: "#00aeff",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45, 25, 10, 5, 8],
      borderRadius: 15,
    },
    {
      label: "Third dataset",
      backgroundColor: "orange",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45, 25, 10, 5, 8],
      borderRadius: 15,
    },
  ],
};

const options = {
  plugins: {
    title: {
      display: false,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const ChartBarStacked = () => {
  return (
    <div className="chart-barstacked-wrapper card" style={{ margin: "0 auto" }}>
      <div className="chart-barstacked-header card-header">Rate</div>
      <div className="card-body">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartBarStacked;
