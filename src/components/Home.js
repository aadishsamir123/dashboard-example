import React from "react";
import { useNavigate } from "react-router-dom";
import { Line } from "react-chartjs-2"; // Import the Line chart from react-chartjs-2
import { useSpring, animated } from "@react-spring/web";
import "@material/web/button/filled-button.js";
import "@material/web/progress/circular-progress.js";

// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto"; // Auto-import Chart.js components

const Home = () => {
  const navigate = useNavigate();

  // Define individual animations for each card
  const taskAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { tension: 180, friction: 12 },
    delay: 500,
  });

  const progressAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { tension: 180, friction: 12 },
    delay: 700,
  });

  const messagesAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { tension: 180, friction: 12 },
    delay: 900,
  });

  const chartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Progress Over Time",
        data: [65, 59, 80, 81, 56], // Example data
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      <md-divider></md-divider>
      <p>Welcome to your dashboard! Here's an overview of your activity:</p>

      {/* Dashboard Sections with Animated Cards */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {/* Tasks Section */}
        <animated.div
          style={{
            ...taskAnimation,
            flex: 1,
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <h3>
            <i className="fas fa-tasks" style={{ marginRight: "10px" }}></i>
            Tasks
          </h3>
          <p>You have 5 pending tasks.</p>
          <md-filled-button onClick={() => navigate("/tasks")}>
            View Tasks
          </md-filled-button>
        </animated.div>

        {/* Progress Section */}
        <animated.div
          style={{
            ...progressAnimation,
            flex: 1,
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <h3>
            <i
              className="fas fa-chart-line"
              style={{ marginRight: "10px" }}
            ></i>
            Progress
          </h3>

          {/* Displaying the graph */}
          <div style={{ height: "200px", marginBottom: "20px" }}>
            <Line data={chartData} />
          </div>

          {/* Button below the graph */}
          <md-filled-button onClick={() => navigate("/progress")}>
            View Progress Report
          </md-filled-button>
        </animated.div>

        {/* Messages Section */}
        <animated.div
          style={{
            ...messagesAnimation,
            flex: 1,
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <h3>
            <i className="fas fa-envelope" style={{ marginRight: "10px" }}></i>
            Messages
          </h3>
          <p>You have 3 new messages.</p>
          <md-filled-button onClick={() => navigate("/messages")}>
            Check Messages
          </md-filled-button>
        </animated.div>
      </div>
    </div>
  );
};

export default Home;
