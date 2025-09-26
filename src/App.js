import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Divider } from "@mui/material";
import Navbar from "./components/Navbar";
import ProductTable from "./components/ProductTable";
import AddProductForm from "./components/AddProductForm";
import ExpiryAlerts from "./components/ExpiryAlerts";
import api from "./services/api";

function App() {
  const [products, setProducts] = useState([]);
  const [expired, setExpired] = useState([]);
  const [expiringSoon, setExpiringSoon] = useState([]);
  const [page, setPage] = useState("dashboard"); // dashboard, all, expired, expiring

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

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

  useEffect(() => {
    fetchProducts();
    fetchAlerts();
  }, []);

  return (
    <>
      <Navbar setPage={setPage} />

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {page === "dashboard" && (
          <>
            <Typography variant="h4" gutterBottom>
              Kirana Store Dashboard
            </Typography>
            <Divider sx={{ my: 2 }} />
            <ExpiryAlerts />
            <Box sx={{ my: 4 }}>
              <AddProductForm onProductAdded={fetchProducts} />
            </Box>
          </>
        )}

        {page === "all" && (
          <>
            <Typography variant="h5" gutterBottom>
              All Products
            </Typography>
            <ProductTable products={products} />
          </>
        )}

        {page === "expired" && (
          <>
            <Typography variant="h5" gutterBottom>
              Expired Products
            </Typography>
            <ProductTable products={expired} />
          </>
        )}

        {page === "expiring" && (
          <>
            <Typography variant="h5" gutterBottom>
              Expiring Soon (7 Days)
            </Typography>
            <ProductTable products={expiringSoon} />
          </>
        )}
      </Container>
    </>
  );
}

export default App;
