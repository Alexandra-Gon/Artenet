import React from "react";
import Alert from '@mui/material/Alert';

const MessageSuccess = ({purchaseID}) => {
  return (
    <Alert severity="success">Gracias por su compra! Su id es: {purchaseID}</Alert>
  );
};

export default MessageSuccess;
