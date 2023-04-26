import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";

const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: "#212121",
                color: "#fff",
                py: "1rem",
                position: "fixed",
                left: 0,
                bottom: 0,
                width: "100%",
                marginTop: "2rem",
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div style={{ display: 'flex' }}>
                    <Link to="/" style={{ color: "#fff", marginRight: "1rem" }}>
                        <Typography variant="subtitle1">Home</Typography>
                    </Link>
                    <Link to="/about" style={{ color: "#fff", marginRight: "1rem" }}>
                        <Typography variant="subtitle1">About</Typography>
                    </Link>
                    <Link to="/contact" style={{ color: "#fff" }}>
                        <Typography variant="subtitle1">Contact</Typography>
                    </Link>
                </div>
                <div>
                    <Typography variant="subtitle1">
                        &copy; 2023 Your Company
                    </Typography>
                </div>
            </Container>
        </Box>
    );
};

export default Footer;
