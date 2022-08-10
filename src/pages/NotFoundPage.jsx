import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "#8C2CEF", fontSize: 150, fontWeight: 700 }}
      >
        404
      </Typography>
      <Typography variant="body1" sx={{ color: "black", fontSize: 45 }}>
        Oops! Page not found
      </Typography>

      <Typography
        sx={{
          fontSize: 15,
          flexWrap: "wrap",
          marginTop: 2,
          color: "#778494",
          fontWeight: 500,
          opacity: "60%",
        }}
        variant="body1"
      >
        Oops! The page you are looking for doesn't exist. It might have been
        moved or deleted
      </Typography>
      {/* <img
        style={{
          width: 500,
          height: 400,
        }}
        src="https://timeweb.com/ru/community/article/67/67d62d1e0bc27de113cc0e25239705e2.png"
      /> */}
      <Box>
        <Button
          sx={{
            my: 1,
            color: "#778494",
            width: "15%",
            textTransform: "capitalize",
            m: 3,
          }}
          onClick={() => navigate("/")}
        >
          HOME
        </Button>
        <Button
          sx={{
            my: 1,
            color: "#778494",
            width: "15%",
            textTransform: "capitalize",
          }}
          onClick={() => navigate("/products")}
        >
          PRODUCTS
        </Button>
      </Box>
    </Paper>
  );
};

export default NotFoundPage;
