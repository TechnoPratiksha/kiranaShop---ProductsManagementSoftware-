import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

function Navbar({ setPage }) {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Kirana Store</Typography>
        <div>
          <Button color="inherit" onClick={() => setPage("dashboard")}>
            Dashboard
          </Button>
          <Button color="inherit" onClick={() => setPage("all")}>
            All Products
          </Button>
          <Button color="inherit" onClick={() => setPage("expiring")}>
            Expiring Soon
          </Button>
          <Button color="inherit" onClick={() => setPage("expired")}>
            Expired
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
