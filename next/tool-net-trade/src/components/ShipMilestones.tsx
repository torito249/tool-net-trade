import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Typography, Paper, Box } from "@mui/material";

interface ShipMilestone {
  id: number;
  portName: string;
  arrivalDate: string;
  departureDate: string;
}

const shipMilestones: ShipMilestone[] = [
  {
    id: 1,
    portName: "TAIPEI",
    arrivalDate: "2024/07/05 13:42",
    departureDate: "2024/07/05 16:36",
  },
  {
    id: 2,
    portName: "TAICHUNG",
    arrivalDate: "2024/07/06 11:42",
    departureDate: "2024/07/06 14:18",
  },
  {
    id: 3,
    portName: "CAT LAI PORT HOCHIMINH",
    arrivalDate: "2024/07/10 11:48",
    departureDate: "2024/07/10 17:54",
  },
  {
    id: 4,
    portName: "PORT KLANG NORTH PORT",
    arrivalDate: "2024/07/13 12:24",
    departureDate: "2024/07/14 20:48",
  },
  {
    id: 5,
    portName: "PENANG",
    arrivalDate: "2024/07/16 13:00",
    departureDate: "2024/07/16 16:06",
  },
  {
    id: 6,
    portName: "CAT LAI PORT HOCHIMINH",
    arrivalDate: "2024/07/20 07:42",
    departureDate: "2024/07/20 15:42",
  },
  {
    id: 7,
    portName: "HONG KONG",
    arrivalDate: "2024/07/23 16:48",
    departureDate: "2024/07/23 21:30",
  },
  {
    id: 8,
    portName: "SHEKOU",
    arrivalDate: "2024/07/24 12:24",
    departureDate: "2024/07/24 13:54",
  },
  {
    id: 9,
    portName: "TOKYO",
    arrivalDate: "2024/07/30 05:00",
    departureDate: "2024/07/30 08:00",
  },
  {
    id: 10,
    portName: "KAWASAKI",
    arrivalDate: "2024/07/31 01:00",
    departureDate: "2024/07/31 06:00",
  },
  {
    id: 11,
    portName: "YOKOHAMA",
    arrivalDate: "2024/07/31 07:00",
    departureDate: "2024/07/31 22:00",
  },
];

const ShipMilestones: React.FC = () => {
  return (
    <Paper elevation={3} style={{ padding: "20px", margin: "20px" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        船のマイルストーン
      </Typography>
      <Box display="flex" justifyContent="flex-start">
        <Timeline position="left" style={{ margin: 0, padding: 0 }}>
          {shipMilestones.map((milestone) => (
            <TimelineItem key={milestone.id}>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={{ textAlign: "left" }}>
                <Typography variant="h6" component="h2">
                  {milestone.portName}
                </Typography>
                <Typography>到着: {milestone.arrivalDate}</Typography>
                <Typography>出発: {milestone.departureDate}</Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Paper>
  );
};

export default ShipMilestones;
