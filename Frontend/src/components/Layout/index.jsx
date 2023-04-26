import React from 'react'
import Header from './Header'
import Footer from './Footer';
import { Container, Grid } from "@mui/material/";

const Layout = ({ children }) => {
    return (
        <Container>
            <Header />
            {/* <Grid container justify="space-between" alignItems="center" mt={5}> */}
            {children}
            {/* </Grid> */}
            <Footer />
        </Container>
    )
}

export default Layout