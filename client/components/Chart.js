import { Line } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";
// import { Chart } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 60],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 70],
      fill: true,
      borderColor: "#7983ff",
      backgroundColor: "#E9EAFF",
    },
  ],
};

const ChartLine = () => {
  return (
    <div className="chart">
      <Line data={data} />
    </div>
  );
};

export default ChartLine;
