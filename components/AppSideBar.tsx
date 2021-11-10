import * as React from 'react';
import {
  AppBar, Box, Drawer, Divider, IconButton,
  List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography
} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import AppHeader from "./AppHeader";
import { useRouter } from 'next/router'

const drawerWidth = 240;

interface Props {
  window?: () => Window;
  htm: any;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [active, setActive] = React.useState("");
  const onHandleSidebar = (link: any) => {
    setActive(link);
    router.push(link);
  }

  const links = [
    {
      text: "Trang chủ",
      link: "admin",
      icon: <MailIcon />
    },
    {
      text: "Quản lý hóa chất",
      link: "chemistry",
      icon: <InboxIcon />
    },
    {
      text: "Thống kê kết quả",
      link: "history",
      icon: <MailIcon />
    }
  ]
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {links.map((text, index) => (
          <ListItem button key={text.text} onClick={() => onHandleSidebar(text.link)} className={`${router.pathname.indexOf(text.link) > -1 ? "active" : ""
            }`}>
            <ListItemIcon>
              {text.icon}
            </ListItemIcon>
            <ListItemText primary={text.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <AppHeader />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {props.htm}
      </Box>
    </Box>
  );
}