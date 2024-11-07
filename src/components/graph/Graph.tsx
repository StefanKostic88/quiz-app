import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { useQuestion } from "../../context/questions-context/QuestionsContext";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "Financial Health of the Company",
  "Business Process",
  "Efficiency",
  "Customer Satisfaction",
];

const options = {
  scales: {
    y: {
      display: true,
      min: 0,
      max: 100,

      title: {
        display: true,
        text: "Percent",
        font: {
          size: 20,
          style: "italic" as const,
          weight: "normal" as const,
        },
      },
    },
  },
};

const Graph = () => {
  const { graphData } = useQuestion();
  const chartRef = useRef(null);

  const data = {
    labels,
    datasets: [
      {
        label: "Passed",
        data: graphData,
        borderColor: "#fff",
        tension: 0.4,
        backgroundColor: " rgb(182, 133, 255)",
      },
    ],
  };

  const downloadPDF = async () => {
    const chartElement = chartRef.current;
    if (chartElement) {
      const canvas = await html2canvas(chartElement);
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("graph.pdf");
    }
  };

  return (
    <div className="reuslts-container">
      <button className="btn-download-pdf" onClick={downloadPDF}>
        <span className="btn-download-pdf__text">Results PDF</span>
        <span className="btn-download-pdf__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 35 35"
            id="bdd05811-e15d-428c-bb53-8661459f9307"
            data-name="Layer 2"
            className="svg"
          >
            <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
            <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
            <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
          </svg>
        </span>
      </button>
      <div ref={chartRef} style={{ alignSelf: "stretch" }}>
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
};

export default Graph;
