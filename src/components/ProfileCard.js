import React, { useState } from "react";
import "./ProfileCard.css"; // Import the CSS file for the modal animations

// A detailed ProfileCard component
const ProfileCard = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <div style={styles.profileCard} onClick={toggleModal}>
        <div style={styles.profileImageContainer}>
          <img
            src="https://www.w3schools.com/w3images/avatar2.png" // Change to your profile image URL
            alt="Profile"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.profileDetails}>
          <h3 style={styles.profileName}>Aadish Samir</h3>
          <p style={styles.profileRole}>Software Engineer</p>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal">
            <div style={styles.modalHeader}>
              <button style={styles.closeButton} onClick={toggleModal}>
                X
              </button>
            </div>
            <div style={styles.modalContent}>
              <div style={styles.modalLeft}>
                <img
                  src="https://www.w3schools.com/w3images/avatar2.png"
                  alt="Profile"
                  style={styles.modalImage}
                />
                <h3>Aadish Samir</h3>
                <p>Software Engineer</p>
              </div>
              <div style={styles.modalRight}>
                <p>
                  <strong>Organization:</strong> TechCorp
                </p>
                <p>
                  <strong>Department:</strong> Engineering
                </p>
                <p>
                  <strong>Location:</strong> New York, USA
                </p>
                <p>
                  <strong>Email:</strong> aadish@techcorp.com
                </p>
                <p>
                  <strong>Phone:</strong> +1 234 567 890
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Inline styles for profile card and modal
const styles = {
  profileCard: {
    position: "absolute",
    top: "20px",
    right: "20px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    padding: "5px 10px",
    zIndex: 10,
    cursor: "pointer",
    transition: "transform 0.3s ease",
  },
  profileImageContainer: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    overflow: "hidden",
    marginRight: "15px",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  profileDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  profileName: {
    fontSize: "16px",
    fontWeight: "500",
    margin: "0",
  },
  profileRole: {
    fontSize: "14px",
    fontWeight: "300",
    margin: "4px 0",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "flex-end",
  },
  closeButton: {
    background: "none",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
  modalContent: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
  },
  modalLeft: {
    textAlign: "center",
    width: "40%",
  },
  modalRight: {
    width: "55%",
    paddingLeft: "20px",
    textAlign: "left",
  },
  modalImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  },
};

export default ProfileCard;
