import * as React from "react";
import { Card, Box, Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function AddStories() {
  return (
    <Box sx={{ display: "flex", gap: 5 }}>
      <Typography variant="h3">Stories</Typography>
      <Card
        sx={{
          background:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcfqsMxtV1Vapam7VoGU_xX0NEWID1e-vsvfRbzhu0xVzyVK7fAg1BsZpbNXSUMROi3HE&usqp=CAU)",
          backgroundRepeat: "no-repeat",
          width: 225,
          height: 300,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
            position: "relative",
            width: 100,
          }}
        >
          <Fab
            sx={{ position: "absolute", top: "-350%" }}
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </Fab>
          <Typography sx={{ display: "flex" }}>Add To Story</Typography>
        </Box>
      </Card>
    </Box>
  );
}
