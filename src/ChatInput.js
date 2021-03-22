import React, { useState } from "react";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";

import "./chatInput.css";
function ChatInput({ channel, channelId }) {
  const [message, setMessage] = useState("");
  const [{ user }, _] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        user: user?.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        userImage: user?.photoURL,
        message: message,
      });

      setMessage("");
    }
  };
  return (
    <div className="chatInput">
      <form>
        <input
          placeholder={`message ${channel}`}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button type={"submit"} onClick={sendMessage}>
          send
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
