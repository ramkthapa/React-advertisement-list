import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Container
} from "reactstrap";

export const Heading = () => {
    return (
        <Navbar color="dark" dark>
            <Container>
                <NavbarBrand href="/">Advertisement List</NavbarBrand>s
            </Container>
        </Navbar>
    )
}
