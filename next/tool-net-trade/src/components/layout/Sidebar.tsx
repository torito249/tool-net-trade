import React from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

const Sidebar: React.FC = () => {
  const menuItems = [
    "ホーム",
    "案件管理",
    "見積比較",
    "データ分析",
    "貿易大学",
  ];

  return (
    <Box
      sx={{
        width: "200px",
        height: "100vh",
        backgroundColor: "#333",
        color: "#fff",
        padding: "20px",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
      }}
    >
      <Typography variant="h6" gutterBottom>
        メニュー
      </Typography>
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            sx={{ "&:hover": { backgroundColor: "#555" } }}
          >
            <ListItemText primary={item} sx={{ color: "#fff" }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
