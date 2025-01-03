import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching user data
    const fetchUser = async () => {
      const users = [
        {
          id: 1,
          name: "John Doe",
          role: "Developer",
          email: "john@example.com",
          phone: "123-456-7890",
        },
        {
          id: 2,
          name: "Jane Smith",
          role: "Designer",
          email: "jane@example.com",
          phone: "987-654-3210",
        },
        {
          id: 3,
          name: "Michael Brown",
          role: "Manager",
          email: "michael@example.com",
          phone: "456-789-0123",
        },
      ];
      const user = users.find((user) => user.id === parseInt(id));
      setUser(user);
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ fontSize: "24px", marginRight: "10px", cursor: "pointer" }}
          onClick={() => navigate(-1)}
        />
        <h1>User Details</h1>
      </div>
      <md-divider></md-divider>
      <md-divider></md-divider>
      <div style={{ marginTop: "20px" }}>
        <h2>{user.name}</h2>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
      </div>
    </div>
  );
};

export default UserDetail;
