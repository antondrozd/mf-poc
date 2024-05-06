import "./App.css";
import { remotes } from "./remotes";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { Link, Outlet } from "react-router-dom";

export const Welcome = () => (
  <>
    <h1>Rsbuild with React</h1>
    <p>Start building amazing things with Rsbuild.</p>
  </>
);

const HostApp = () => {
  return (
    <>
      <Drawer
        sx={{
          width: "25%",
          "& .MuiDrawer-paper": {
            width: "25%",
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {remotes.map((remote) => (
            <ListItem key={remote.alias}>
              <Link
                to={remote.alias}
                style={{ width: "100%", textDecoration: "none" }}
              >
                <ListItemButton>
                  <ListItemText>{remote.name}</ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default HostApp;
