import React from "react";
import {Box, Typography } from "@mui/material";
import { StatusTracker } from "react-status-tracker";

const demoSteps = [
  "TESTING",
  "TESTING COMPLETE",
  "TESTING REVIEW",
  "TESTING APPROVED",
];

export default function App() {


  return (
    <Box sx={{ p: 6, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Typography variant="h5" gutterBottom>
        Status Tracker Examples
      </Typography>

      <Box sx={{ mb: 8 }}>
        <Typography variant="subtitle1" gutterBottom color="text.secondary">
          Horizontal • Flagged (Red)
        </Typography>
        
      </Box>

      <Box sx={{ maxWidth: 400 }}>
        <Typography variant="subtitle1" gutterBottom color="text.secondary">
          Vertical • Normal Flow
        </Typography>
        <StatusTracker
          steps={demoSteps}
          currentStatus="TESTING COMPLETE"
          orientation="vertical"
          flagged
        />
      </Box>

      <Box sx={{ mt: 8 }}>
        <Typography variant="subtitle1" gutterBottom color="text.secondary">
          Horizontal • Completed
        </Typography>
        <StatusTracker
          steps={demoSteps}
          currentStatus="TESTING APPROVED"
          flagged
        />
      </Box>
    </Box>
  );
}