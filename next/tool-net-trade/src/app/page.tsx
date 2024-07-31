import Head from "next/head";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  const menuItems = [
    { text: "案件管理", href: "/projects" },
    { text: "見積比較", href: "/estimates" },
    { text: "データ分析", href: "/analysis" },
    { text: "貿易大学", href: "/university" },
  ];

  return (
    <div>
      <Head>
        <title>案件管理アプリ</title>
      </Head>
      <main>
        <Box padding={2}>
          <Typography variant="h4" gutterBottom>
            ホーム
          </Typography>
          <Grid container spacing={2}>
            {menuItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Link href={item.href} passHref>
                  <Paper
                    elevation={3}
                    sx={{
                      padding: 2,
                      textAlign: "center",
                      cursor: "pointer",
                      height: 150,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#333",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#555",
                      },
                    }}
                  >
                    <Typography variant="h6">{item.text}</Typography>
                  </Paper>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </main>
    </div>
  );
}
