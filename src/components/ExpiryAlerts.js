import React, { useEffect, useState } from "react";
import { Alert, Stack } from "@mui/material";
import api from "../services/api";

function ExpiryAlerts() {
  const [expired, setExpired] = useState([]);
  const [expiringSoon, setExpiringSoon] = useState([]);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const expiredRes = await api.get("/products/expired");
        setExpired(expiredRes.data);

        const expiringRes = await api.get("/products/expiring?days=7");
        setExpiringSoon(expiringRes.data);
      } catch (err) {
        console.error("Error fetching alerts:", err);
      }
    };
    fetchAlerts();
  }, []);

  return (
    <Stack spacing={2} sx={{ mb: 3 }}>
      {expired.length > 0 && (
        <Alert severity="error">
          {expired.length} products have expired!
        </Alert>
      )}
      {expiringSoon.length > 0 && (
        <Alert severity="warning">
          {expiringSoon.length} products expiring within 7 days.
        </Alert>
      )}
    </Stack>
  );
}

export default ExpiryAlerts;
