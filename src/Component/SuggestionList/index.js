import { Avatar, Box, Card, AvatarGroup, Typography } from "@mui/material";
import React from "react";
import { users } from "../../Dashboard/db";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { faker } from "@faker-js/faker";

export default function SuggestionList() {
  return (
    <Box>
      <Typography variant="h3" sx={{ marginBottom: 5 }}>
        People You May Know
      </Typography>
      {users.map((user) => {
        return (
          <Box sx={{ display: "flex", gap: 10, marginBottom: 8 }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
                width: 300,
                paddingBottom: 3,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  fontSize: 20,
                }}
              >
                <Avatar
                  src={`${faker.image.urlPicsumPhotos()}`}
                  style={{ width: 56, height: 56 }}
                />
                {`${faker.person.firstName()} ${" "} ${faker.person.lastName()}`}
              </div>
              <AvatarGroup sx={{ display: "flex", gap: 2 }}>
                <div style={{display: "flex"}}>
                  <Avatar
                    sx={{ width: 30, height: 30 }}
                    alt="Remy Sharp"
                    src={`${faker.image.urlPicsumPhotos()}`}
                  />
                  <Avatar
                    alt="Travis Howard"
                    src={`${faker.image.urlPicsumPhotos()}`}
                    sx={{ width: 30, height: 30 }}
                  />
                  <Avatar
                    sx={{ width: 30, height: 30 }}
                    alt="Cindy Baker"
                    src={`${faker.image.urlPicsumPhotos()}`}
                  />
                </div>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  Mutual Friends
                </Typography>
              </AvatarGroup>
              <ButtonGroup
                disableElevation
                aria-label="Disabled elevation buttons"
                sx={{ display: "flex", gap: 2 }}
              >
                <Button variant="contained">Add Friend</Button>
                <Button>Remove</Button>
              </ButtonGroup>
            </Card>
          </Box>
        );
      })}
    </Box>
  );
}
