import { Home, HomeWork, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  Badge,
  Avatar,
  Stack,
  Button,
  Menu,
  MenuItem,
  Tab,
  Tabs,
} from "@mui/material";
import React, { useState } from "react";

const NewTabs = styled(Tabs)({
  display: "flex",
  justifySelf: "flex-start",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="h5">NUSTutor</Typography>
            <NewTabs
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              indicatorColor="secondary"
              textColor="secondary"
            >
              <Tab label="NUSMODS" style={{ minWidth: 50 }} />
              <Tab label="INTERNSHIPS" style={{ minWidth: 50 }} />
              <Tab label="MATCH-A-SENIOR" style={{ minWidth: 50 }} />
            </NewTabs>
          </Stack>
        </Typography>
        <HomeWork sx={{ display: { xs: "block", sm: "none" }, fontSize: 30 }} />
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar onClick={(e) => setOpen(true)} />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar />
          <Typography variant="span">Anton</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
