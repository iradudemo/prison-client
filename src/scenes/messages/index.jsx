import axios from "axios";
import "./msg.css";
import React, { useEffect, useState } from "react";


function Messages() {
  const [messages, setMessages] = useState([]);
  const [mFecthing, setMFetching] = useState(false);
  const fetchMessage = () => {
    setMFetching(true);
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/messages")
      .then((res) => {
        setMFetching(false);
        setMessages(res.data.data);
      })
      .catch((error) => {
        setMFetching(false);
        console.log("CatchError", error);
      });
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div>
      <div className="messagesContent">

      
      {messages.map((m, i) => (
        <div key={i} className='messageContainer'>
          <div className='messageFrom'>
            <span>{`${m.firstname} ${m.lastname}`}</span>
            <div style={{color:"wheat"}}>email.com</div>
            <hr style={{width:"100%", opacity:"1.5px"}}/>
          </div>
          <div className='messageContent'>
            <p>{m.content}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Messages;
