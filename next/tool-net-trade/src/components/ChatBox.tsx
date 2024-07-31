"use client";

// components/layout/ChatBox.tsx
"use client";

import React from "react";
import { Paper, Typography, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChatIcon from "@mui/icons-material/Chat";
import useToggle from "@/hooks/useToggle";

interface Message {
  id: number;
  sender: string;
  content: string;
}

const messages: Message[] = [
  {
    id: 1,
    sender: "A",
    content: "ありがとうございます。船の予約をいただきました。",
  },
  {
    id: 2,
    sender: "B",
    content: "出港予定日になったら、問題なく出航したか連絡ください。",
  },
  {
    id: 3,
    sender: "A",
    content:
      "1日遅れで出航しましたが、今の予定では、東京到着に遅れはない予定です。",
  },
  {
    id: 4,
    sender: "B",
    content: "ありがとうございます。引き続きよろしくおねがいします。",
  },
  { id: 5, sender: "A", content: "わかりました。すぐに確認します。" },
];

const ChatBox: React.FC = () => {
  const [open, toggleOpen] = useToggle(true);

  return (
    <>
      {open ? (
        <Paper
          elevation={3}
          style={{
            padding: "20px",
            margin: "20px",
            maxHeight: "400px",
            overflow: "auto",
            position: "relative",
          }}
        >
          <IconButton
            style={{ position: "absolute", top: "10px", right: "10px" }}
            onClick={toggleOpen}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h4" component="h1" gutterBottom>
            チャットボックス
          </Typography>
          {messages.map((message) => (
            <Box
              key={message.id}
              style={{
                display: "flex",
                justifyContent:
                  message.sender === "A" ? "flex-start" : "flex-end",
                marginBottom: "10px",
              }}
            >
              <Box
                style={{
                  backgroundColor:
                    message.sender === "A" ? "#e0f7fa" : "#c8e6c9",
                  color: "#000",
                  borderRadius: "10px",
                  padding: "10px",
                  maxWidth: "70%",
                }}
              >
                <Typography variant="body1" component="p">
                  <strong>{message.sender}:</strong> {message.content}
                </Typography>
              </Box>
            </Box>
          ))}
        </Paper>
      ) : (
        <IconButton
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            backgroundColor: "#fff",
            borderRadius: "50%",
            padding: "10px",
          }}
          onClick={toggleOpen}
        >
          <ChatIcon fontSize="large" />
        </IconButton>
      )}
    </>
  );
};

export default ChatBox;
