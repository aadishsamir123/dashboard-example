import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@material/web/button/filled-button.js";
import "@material/web/textfield/outlined-text-field.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"; 

const Messages = () => {
  const navigate = useNavigate();

  // State for holding messages
  const [messages, setMessages] = useState([
    { id: 1, name: "John Doe", message: "Hey, how are you?", image: "https://www.w3schools.com/w3images/avatar1.png", reply: "" },
    { id: 2, name: "Jane Smith", message: "Let's catch up soon!", image: "https://www.w3schools.com/w3images/avatar2.png", reply: "" },
    { id: 3, name: "Michael Brown", message: "Good morning!", image: "https://www.w3schools.com/w3images/avatar3.png", reply: "Good Morning! Excited to see the weekly reports!" },
    { id: 4, name: "Emily White", message: "Are you free this weekend?", image: "https://www.w3schools.com/w3images/avatar4.png", reply: "" },
    { id: 5, name: "Chris Green", message: "Check out this cool piece of code!", image: "https://www.w3schools.com/w3images/avatar5.png", reply: "Wow! How did you optimize it that much?" },
  ]);

  // State for managing the dialog visibility and reply input
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [currentMessageId, setCurrentMessageId] = useState(null);

  // Open the reply dialog
  const handleReplyClick = (messageId) => {
    setCurrentMessageId(messageId);
    setIsDialogOpen(true);
  };

  // Handle the reply submission
  const handleReplySubmit = () => {
    if (replyText.trim() !== "") {
      setMessages((prevMessages) =>
        prevMessages.map((message) =>
          message.id === currentMessageId
            ? { ...message, reply: replyText }
            : message
        )
      );
      setReplyText("");  // Clear the reply input
      setIsDialogOpen(false);  // Close the dialog
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "left" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ fontSize: "24px", marginRight: "10px", cursor: "pointer" }}
          onClick={() => navigate(-1)}
        />
        <h1>Messages</h1>
      </div>
      <md-divider></md-divider>

      {/* Message List */}
      <div>
        {messages.length === 0 ? (
          <p>No messages to display</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  display: "flex",
                  alignItems: "flex-start",  // Align to the left
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  gap: "10px",
                  flexDirection: "column",
                  width: "95%", // Ensure full width
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <img src={message.image} alt={message.name} style={{ borderRadius: "50%", width: "50px", height: "50px" }} />
                  <div style={{ textAlign: "left" }}>
                    <h3 style={{ margin: "0" }}>{message.name}</h3>
                    <p style={{ margin: "0", color: "#555" }}>{message.message}</p>
                    {message.reply && (
                      <div style={{ marginTop: "10px", padding: "10px", background: "#f5f5f5", borderRadius: "5px", width: "100%" }}>
                        <strong>Reply: </strong>
                        {message.reply}
                      </div>
                    )}
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                  <md-filled-button onClick={() => handleReplyClick(message.id)}>
                    Reply
                  </md-filled-button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Reply Dialog */}
      {isDialogOpen && currentMessageId !== null && (
        <div style={{
          position: "fixed", top: "0", left: "0", right: "0", bottom: "0", backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex", justifyContent: "center", alignItems: "center", zIndex: "9999"
        }}>
          <div style={{
            backgroundColor: "white", padding: "20px", borderRadius: "8px", width: "400px", maxWidth: "80%"
          }}>
            <h3>Reply to {messages.find(m => m.id === currentMessageId).name}</h3>
            <p>{messages.find(m => m.id === currentMessageId).message}</p>
            
            {/* Material Web Textbox for reply */}
            <md-outlined-text-field
              label="Type your reply"
              value={replyText}
              onInput={(e) => setReplyText(e.target.value)}
              style={{ width: "100%", marginBottom: "15px" }}
            ></md-outlined-text-field>

            <div style={{ marginTop: "10px", display: "flex", justifyContent: "flex-start" }}>
              <md-filled-button onClick={handleReplySubmit}>Send Reply</md-filled-button>
              <md-filled-button onClick={() => setIsDialogOpen(false)} style={{ backgroundColor: "gray", marginLeft: "10px" }}>
                Close
              </md-filled-button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
