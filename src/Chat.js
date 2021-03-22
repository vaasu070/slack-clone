import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./chat.css";
import ChatInput from "./ChatInput";
import { db } from "./firebase";
import Message from "./Message";
function Chat(props) {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomDetails(snapshot.data());
        });
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snap) => {
        setMessages(snap.docs.map((doc) => doc.data()));
      });
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </div>

        <div className="chat__headerRight">
          <p>
            <InfoOutlined /> Details
          </p>
        </div>
      </div>

      {messages.map(({ message, user, timestamp, userImage }) => (
        <Message
          message={message}
          user={user}
          timestamp={timestamp}
          userImage={userImage}
        />
      ))}

      <ChatInput channel={roomDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
