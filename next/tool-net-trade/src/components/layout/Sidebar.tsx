import React from "react";
import Link from "next/link";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

const Sidebar: React.FC = () => {
  const menuItems = [
    { text: "ホーム", href: "/" },
    { text: "案件管理", href: "/projects" },
    { text: "見積比較", href: "/estimates" },
    { text: "港から探す", href: "/port-to-port" },
    { text: "船名から探す", href: "/vessel-tracking" },
    { text: "データ分析", href: "/analysis" },
    { text: "貿易大学", href: "/university" },
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
            component={Link}
            href={item.href}
          >
            <ListItemText primary={item.text} sx={{ color: "#fff" }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
