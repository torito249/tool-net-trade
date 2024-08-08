// src/app/vessel/[shipName]/page.tsx

import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface Schedule {
  port: string;
  arrival_voyage: string;
  eta: string;
  etb: string;
  etd: string;
  departure_voyage: string;
  status: string;
}

interface ShipProps {
  params: {
    shipName: string;
  };
}

async function fetchShipSchedules(shipName: string): Promise<Schedule[]> {
  const res = await fetch(
    `https://app-nr42pz3btq-an.a.run.app/schedules/wanhai/${shipName}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch ship schedules");
  }
  return res.json();
}

export default async function ShipSchedulePage({ params }: ShipProps) {
  const { shipName } = params;
  const schedules = await fetchShipSchedules(shipName);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        {shipName} のスケジュール
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Port</TableCell>
              <TableCell>Arrival Voyage</TableCell>
              <TableCell>ETA</TableCell>
              <TableCell>ETB</TableCell>
              <TableCell>ETD</TableCell>
              <TableCell>Departure Voyage</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedules.map((schedule, index) => (
              <TableRow key={index}>
                <TableCell>{schedule.port}</TableCell>
                <TableCell>{schedule.arrival_voyage}</TableCell>
                <TableCell>{new Date(schedule.eta).toLocaleString()}</TableCell>
                <TableCell>{new Date(schedule.etb).toLocaleString()}</TableCell>
                <TableCell>{new Date(schedule.etd).toLocaleString()}</TableCell>
                <TableCell>{schedule.departure_voyage}</TableCell>
                <TableCell>{schedule.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
