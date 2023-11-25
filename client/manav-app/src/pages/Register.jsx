import React, { useState } from "react";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Createaccount = styled(Link)`
  font-size: 1.2rem;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;
function Register() {
  const navigate = useNavigate();
  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post("/", {
        name,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Registeraion Successful, Welcome!!");
        navigate("/login");
      }
    } catch (error) {
      console.loh(error);
    }
  };

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <form onSubmit={registerUser}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent="center"
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={" 5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h2" padding={3} textAlign="center">
            Signup
          </Typography>
          <TextField
            margin="normal"
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            variant="outlined"
            placeholder="Name"
            fullWidth
          />
          <TextField
            margin="normal"
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            variant="outlined"
            placeholder="Email"
            fullWidth
          />

          <TextField
            margin="normal"
            type={showPassword ? "text" : "password"}
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            variant="outlined"
            placeholder="Password"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            margin="normal"
            type="text"
            variant="outlined"
            placeholder="Confirm Password"
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            color="warning"
            sx={{ marginTop: 3, borderRadius: 3 }}
          >
            Signup
          </Button>
          <Createaccount href="/login" underline="none" sx={{ marginTop: 3 }}>
            Alerady a member? Login
          </Createaccount>
        </Box>
      </form>
    </div>
  );
}

export default Register;
