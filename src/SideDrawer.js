import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar
});

const SideDrawer = ({ classes }) => (
  <Drawer
    className={classes.drawer}
    variant="permanent"
    classes={{
      paper: classes.drawerPaper
    }}
    anchor="left"
  >
    <div className={classes.toolbar} />
    <Divider />
    <List>
      <Link to="/">
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Link to="/stories">
        <ListItem button>
          <ListItemText primary="Stories" />
        </ListItem>
      </Link>
    </List>
  </Drawer>
);

export default withStyles(styles)(SideDrawer);
