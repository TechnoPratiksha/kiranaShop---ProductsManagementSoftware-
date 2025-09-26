import React, { useState } from "react";
import { Box, TextField, Button, Paper, Typography } from "@mui/material";
import api from "../services/api";

function AddProductForm({ onProductAdded }) {
  const [form, setForm] = useState({
    name: "",
    quantity: "",
    purchaseDate: "",
    expiryDate: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/products", form);
      setForm({ name: "", quantity: "", purchaseDate: "", expiryDate: "" });
      onProductAdded();
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Add New Product
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <TextField label="Name" name="name" value={form.name} onChange={handleChange} required />
        <TextField label="Quantity" name="quantity" type="number" value={form.quantity} onChange={handleChange} required />
        <TextField label="Purchase Date" name="purchaseDate" type="date" value={form.purchaseDate} onChange={handleChange} InputLabelProps={{ shrink: true }} required />
        <TextField label="Expiry Date" name="expiryDate" type="date" value={form.expiryDate} onChange={handleChange} InputLabelProps={{ shrink: true }} required />
        <Button type="submit" variant="contained" color="primary">Add</Button>
      </Box>
    </Paper>
  );
}

export default AddProductForm;
