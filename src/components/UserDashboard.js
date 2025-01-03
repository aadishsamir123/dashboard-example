import React from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";

const users = [
  { id: 1, name: "John Doe", role: "Developer" },
  { id: 2, name: "Jane Smith", role: "Designer" },
  { id: 3, name: "Michael Brown", role: "Manager" },
  // Add more users as needed
];

const Card = ({ user, onClick }) => {
  const userAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { tension: 180, friction: 12 },
    delay: 500,
  });

  return (
    <animated.div
      style={{
        ...userAnimation,
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        width: "200px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
      onClick={onClick}
    >
      <img
        src={`https://www.w3schools.com/w3images/avatar${user.id}.png`}
        alt={user.name}
        style={{ borderRadius: "50%", width: "100px", height: "100px" }}
      />
      <h3>{user.name}</h3>
      <p>{user.role}</p>
      <md-filled-button>View Details</md-filled-button>
    </animated.div>
  );
};

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleUserClick = (id) => {
    navigate(`/user-details/${id}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Users</h1>
      <md-divider></md-divider>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {users.map((user) => (
          <Card
            key={user.id}
            user={user}
            onClick={() => handleUserClick(user.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
