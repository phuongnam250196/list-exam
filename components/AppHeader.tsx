import React, { useState, useEffect } from "react";
import Link from "next/link";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Toolbar,
  AppBar,
  Box,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
// import {SESSIONSTORAGE} from "../lib/constances/const"
const StyledFab = styled(Button)({
  color: "#fff",
  padding: "20px 8px",
});

const AppHeader = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const [id, setID] = React.useState();

  useEffect(() => {
    // const data = /;
    if (window.sessionStorage["user"] !== undefined) {
      const userID = JSON.parse(window.sessionStorage["user"]);
      const id = userID.id;
      setID(id);
    }
  }, [auth]);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const goto = (url: string) => {
    // window.sessionStorage.removeItem(SESSIONSTORAGE.LOCATION);
    router.push(url);
  };
  const logOut = (url: string) => {
    window.sessionStorage.clear();
    router.push(url);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {/* <StyledFab
            className={`${
              router.pathname.indexOf("order") > -1 ? "active" : ""
            } nav-link`}
          >
            <Link href={"/order"}>Đơn hàng</Link>
          </StyledFab> */}
          
        </Typography>
        {auth && (
          <div>
            <span>Admin</span>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>
                <Link href={`/personal/${id}`}>
                  <a>Thông tin tài khoản</a>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href={"/auth/setPassword"}>
                  <a>Đổi mật khẩu</a>
                </Link>
              </MenuItem>
              <MenuItem onClick={() => logOut("/auth")}>Đăng xuất</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </Box>
  );
};
export default AppHeader;
