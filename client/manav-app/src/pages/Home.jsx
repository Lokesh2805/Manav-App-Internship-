import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Button } from "@mui/material";
import LoginOutlined from "@mui/icons-material/LoginOutlined";

function Home() {
  const { user } = useContext(UserContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Dashboard</h1>
      {!!user && <h2>Hi {user.name}!</h2>}
      <Button
        href="/login"
        variant="contained"
        color="warning"
        endIcon={<LoginOutlined />}
      >
        Logout
      </Button>
    </div>
  );
}

export default Home;
