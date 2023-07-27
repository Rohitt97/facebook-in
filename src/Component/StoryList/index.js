import React from "react";
import { users } from "../../Dashboard/db";
import Badge from "@mui/material/Badge";
import { Box, Card, Typography } from "@mui/material";
import { faker } from "@faker-js/faker";

export default function StoriesList() {
  return (
    <Box sx={{ display: "flex", gap: 10 }}>
      {users.map((user) => {
        return (
          <Card
            sx={{
              display: "flex",
              background: `url(${faker.image.urlPicsumPhotos()})`,
              backgroundRepeat: "no-repeat",
              width: 200,
              height: 230,
              paddingTop: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Badge
                sx={{ width: 10 }}
                badgeContent={Math.floor(Math.random() * 6)}
                color="secondary"
              ></Badge>
              <Typography
                sx={{ color: "purple", backgroundColor: "white", width: 225 }}
              >
                {`${faker.person.firstName()} ${" "} ${faker.person.lastName()}`}
              </Typography>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
}
