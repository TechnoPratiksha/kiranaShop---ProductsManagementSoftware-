import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";

function ProductTable({ products }) {
  const getStatus = (expiryDate) => {
    const today = new Date();
    const expDate = new Date(expiryDate);
    const diff = Math.ceil((expDate - today) / (1000 * 60 * 60 * 24));

    if (diff < 0) return { text: "Expired", color: "error" };      // 🔴 Red
    if (diff <= 7) return { text: "Expiring Soon", color: "warning" }; // 🟠 Orange
    return { text: "Fresh", color: "success" };                    // 🟢 Green
  };

  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>ID</strong></TableCell>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell><strong>Quantity</strong></TableCell>
            <TableCell><strong>Purchase Date</strong></TableCell>
            <TableCell><strong>Expiry Date</strong></TableCell>
            <TableCell><strong>Status</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} align="center">
                No products found
              </TableCell>
            </TableRow>
          ) : (
            products.map((product) => {
              const { text, color } = getStatus(product.expiryDate);

              return (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>{product.purchaseDate}</TableCell>
                  <TableCell>{product.expiryDate}</TableCell>
                  <TableCell>
                    <Chip label={text} color={color} variant="filled" />
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProductTable;
