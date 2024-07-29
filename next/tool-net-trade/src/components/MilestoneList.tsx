import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Typography, Paper } from "@mui/material";

interface Milestone {
  id: number;
  title: string;
  description: string;
  date: string;
}

const milestones: Milestone[] = [
  {
    id: 1,
    title: "案件登録",
    description: "案件開始日",
    date: "2024-08-01",
  },
  {
    id: 2,
    title: "コンテナピック",
    description: "コンテナ受け取り",
    date: "2024-08-15",
  },
  {
    id: 3,
    title: "CUT日",
    description: "CUT日",
    date: "2024-09-01",
  },
  {
    id: 4,
    title: "出港",
    description: "ETD",
    date: "2024-09-15",
  },
  {
    id: 5,
    title: "入港",
    description: "ETA",
    date: "2024-09-30",
  },
  {
    id: 6,
    title: "通関日",
    description: "通関完了日",
    date: "2024-10-05",
  },
  {
    id: 7,
    title: "納入日",
    description: "最終納入日",
    date: "2024-10-10",
  },
];

const MilestoneList: React.FC = () => {
  return (
    <Paper elevation={3} style={{ padding: "20px", margin: "20px" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        マイルストーン
      </Typography>
      <Timeline>
        {milestones.map((milestone) => (
          <TimelineItem key={milestone.id}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="h2">
                {milestone.title}
              </Typography>
              <Typography>{milestone.description}</Typography>
              <Typography color="textSecondary">{milestone.date}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Paper>
  );
};

export default MilestoneList;
