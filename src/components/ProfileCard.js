import React from 'react';

// A simple ProfileCard component
const ProfileCard = () => {
  return (
    <div style={styles.profileCard}>
      <div style={styles.profileImageContainer}>
        <img
          src="https://www.w3schools.com/w3images/avatar2.png" // Change to your profile image URL
          alt="Profile"
          style={styles.profileImage}
        />
      </div>
      <div style={{ ...styles.profileDetails, marginBottom: '0px' }}>
        <p style={{ fontWeight: '300', fontSize: '0.75rem', marginBottom: '4px', marginTop: '0px' }}>Logged in as</p>
        <h3 style={{ ...styles.profileName, marginTop: '0px' }}>Aadish Samir</h3>
      </div>
    </div>
  );
};

// Inline styles for profile card
const styles = {
  profileCard: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    padding: '10px 15px',
    zIndex: 10,
  },
  profileImageContainer: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    overflow: 'hidden',
    marginRight: '10px',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  profileDetails: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  profileName: {
    fontSize: '14px',
    margin: 0,
  },
};

export default ProfileCard;
