import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

const data = {
  labels: ["Red", "Blue", "Yellow", "Purple"],
  datasets: [
    {
      data: [12, 9, 3, 5],
      backgroundColor: ["#FF4069", "#36A2EB", "#FFC234", "#9966FF"],
    },
  ],
};
const ChartDoughnut = () => {
  return (
    <div className="chart-doughnut-wrapper card">
      <div className="card-header">Rate</div>
      <div className="card-body">
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default ChartDoughnut;
