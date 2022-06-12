import { useState } from "react";
import { Box, Alert, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Warning = () => {
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          severity="info"
          color="error"
          sx={{ mb: 2 }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          This project is deployed to Mumbai Testnet 022 Spring Chainlink
          Hackathon, it is currently NOT SECURED FOR MAINNET LAUNCH. If you want
          to participate as an early access tester for mainnet, contact{" "}
          <strong>
            <a href="https://mail.google.com">brofundme0@gmail.com</a>
          </strong>
          {/* how to do with this email*/}
        </Alert>
      </Collapse>
    </Box>
  );
};

export default Warning;
