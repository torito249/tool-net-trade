import React from "react";
import { Paper, Typography, Link } from "@mui/material";

interface ShipInfoProps {
  name: string;
  voyageNumber: string;
  eta: string;
  shipCompanyUrl: string;
  marineTrafficUrl: string;
  voyageInfoUrl: string;
}

const ShipInfo: React.FC<ShipInfoProps> = ({
  name,
  voyageNumber,
  eta,
  shipCompanyUrl,
  marineTrafficUrl,
  voyageInfoUrl,
}) => {
  return (
    <Paper elevation={3} style={{ padding: "20px", margin: "20px" }}>
      <Typography variant="h4" component="h2" gutterBottom>
        船の情報
      </Typography>
      <Typography variant="h6">船名: {name}</Typography>
      <Typography variant="body1">航海番号: {voyageNumber}</Typography>
      <Typography variant="body1">ETA: {eta}</Typography>
      <Typography variant="body1">
        船社の情報:{" "}
        <Link href={shipCompanyUrl} target="_blank" rel="noopener">
          リンク
        </Link>
      </Typography>
      <Typography variant="body1">
        Marine Traffic情報:{" "}
        <Link href={marineTrafficUrl} target="_blank" rel="noopener">
          リンク
        </Link>
      </Typography>
      <Typography variant="body1">
        前後の航海情報:{" "}
        <Link href={voyageInfoUrl} target="_blank" rel="noopener">
          リンク
        </Link>
      </Typography>
    </Paper>
  );
};

export default ShipInfo;
