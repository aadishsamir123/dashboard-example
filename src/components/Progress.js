import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "@material/web/button/filled-button.js";
import "@material/web/textfield/outlined-text-field.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Progress = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const hasMounted = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const data1 = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Tasks Completed",
        data: [10, 15, 25, 30],
        fill: true,
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const data2 = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Tasks Pending",
        data: [20, 18, 10, 5],
        fill: true,
        borderColor: "#F44336",
        backgroundColor: "rgba(244, 67, 54, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
    animation: hasMounted.current
      ? {
          duration: 1000,
          easing: "easeInOutQuad",
          delay: 1500,
        }
      : false,
  };

  useEffect(() => {
    hasMounted.current = true;
  }, []);

  const Card = ({ title, children, style = {} }) => (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        margin: "20px 0",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        background: "linear-gradient(135deg, #6dd5ed 0%, #2193b0 100%)",
        color: "white",
        ...style,
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>{title}</h2>
      {children}
    </div>
  );

  return (
    <div style={{ padding: "20px", textAlign: "left" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ fontSize: "24px", marginRight: "10px", cursor: "pointer" }}
          onClick={() => navigate(-1)}
        />
        <h1>Progress Report</h1>
      </div>
      <md-divider></md-divider>

      <Card title="AI Summary">
        {loading ? (
          <div style={{ textAlign: "center", padding: "20px" }}>
            <div
              className="spinner"
              style={{
                width: "40px",
                height: "40px",
                border: "4px solid rgba(255, 255, 255, 0.3)",
                borderTop: "4px solid white",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
              }}
            ></div>
            <style>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        ) : (
          <p>
            Your productivity has increased by 30% over the past 4 weeks. Tasks
            completed are steadily rising, and pending tasks have significantly
            decreased. Keep up the great work!
          </p>
        )}
      </Card>

      <Card
        title="Tasks Completed"
        style={{ background: "white", color: "black" }}
      >
        <Line data={data1} options={options} />
      </Card>

      <Card
        title="Tasks Pending"
        style={{ background: "white", color: "black" }}
      >
        <Line data={data2} options={options} />
      </Card>
    </div>
  );
};

export default Progress;
