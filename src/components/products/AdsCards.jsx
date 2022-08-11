import * as React from "react";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AdsCards() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          m: 3,
        }}
      >
        <img
          onClick={() => navigate("/#")}
          src="https://images.wbstatic.net/bners1/desk_ek_0808_TV.jpg"
          alt="img"
          className="scale"
        />

        <img
          onClick={() => navigate("/#")}
          src="https://images.wbstatic.net/bners1/desk_sokolov_0808_TV.jpg"
          alt="img"
          className="scale"
        />
        <img
          onClick={() => navigate("/#")}
          src="https://images.wbstatic.net/bners1/desk_polaris_0808_TV.jpg"
          alt="img"
          className="scale"
        />
        <img
          onClick={() => navigate("/#")}
          src="https://images.wbstatic.net/bners1/desk_adidas_0808_TV.jpg"
          alt="img"
          className="scale"
        />
        <img
          onClick={() => navigate("/#")}
          src="https://images.wbstatic.net/bners1/desk_yr_0608_UT.jpg"
          alt="img"
          className="scale"
        />
        <img
          onClick={() => navigate("/#")}
          src="https://images.wbstatic.net/bners1/desk_bd_0608_UT.jpg"
          alt="img"
          className="scale"
        />
        <img
          onClick={() => navigate("/#")}
          src="https://images.wbstatic.net/bners1/desk_huggies_0608_UT.jpg"
          alt="img"
          className="scale"
        />
        <img
          onClick={() => navigate("/products")}
          src="https://images.wbstatic.net/bners1/desk_loreal_0608_UT.jpg"
          alt="img"
          className="scale"
        />
      </Box>
    </Box>
  );
}
