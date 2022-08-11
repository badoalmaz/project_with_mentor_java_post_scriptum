import * as React from "react";
import "../styles/aboutUsPage.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

const currencies = [
  {
    value: "Помощь и поддержка",
    label: "Помощь и поддержка",
  },
  {
    value: "Парнёрства",
    label: "Парнёрства",
  },
  {
    value: "Сообщение о неисправностях",
    label: "Сообщение о неисправностях",
  },
  {
    value: "Другое",
    label: "Другое",
  },
];

export default function AboutUsPage() {
  const [currency, setCurrency] = React.useState();

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const general = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    borderLeft: "2px solid black",
    pl: "10%",
    justifyContent: "center",
  };

  return (
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "space-around", flexDirection: "column" }}>
      <Typography sx={{ width: 1 }}>Приветсую тебя</Typography>
        <Typography>Наш магазин сущестует более не сколько дней и нам пока что никто не доверился, более 0 довольных клиентов. Стань первым покупателям и получи в подарок консультанта. 1+1 Ждём вас!!</Typography>
      <Box sx={general}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        ></Box>
        <Typography sx={{ display: "flex", pl: 2 }}>
          Обратная связь
          <Typography sx={{ color: "gray" }}>/помощь</Typography>
        </Typography>
        <TextField
          id="standard-multiline-static"
          label="Email"
          variant="standard"
          sx={{ m: 2, width: "50vh" }}
          color="secondary"
        />
        <TextField
          id="standard-select-currency"
          select
          label="Выберите запрос"
          value={currency}
          onChange={handleChange}
          variant="standard"
          sx={{ m: 2, width: "50vh" }}
          color="secondary"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-multiline-static"
          label="Сообщение"
          multiline
          rows={4}
          variant="standard"
          sx={{ m: 2, width: "50vh" }}
          color="secondary"
        />
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "end",
            pr: 2,
          }}
        >
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            sx={{ backgroundColor: "#8C2CEF" }}
            color="secondary"
          >
            Отправить
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
