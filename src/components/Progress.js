import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@material/web/button/filled-button.js";
import "@material/web/textfield/outlined-text-field.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"; 

const Messages = () => {
    
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", textAlign: "left" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ fontSize: "24px", marginRight: "10px", cursor: "pointer" }}
          onClick={() => navigate(-1)}
        />
        <h1>Progress</h1>
      </div>
      <md-divider></md-divider>
      <p>Nothing here yet :(</p>
    </div>
  );
};

export default Messages;
