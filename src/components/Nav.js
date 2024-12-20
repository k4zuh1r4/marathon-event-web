
'use client';
import React from "react";
import { Navbar, Typography, Button, IconButton, Collapse } from "@material-tailwind/react";
import { ListOption, XMark } from "./icons";
import { Link } from "react-router-dom";
const NavList = () => {
    return (
        <ul className="flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8 text-xl text-white font-montserrat">
            <Link to="/">Home</Link>
            <Link to="signup">Sign Up</Link>
        </ul>
    )
}
export const Nav = () => {
    const [open, setOpen] = React.useState(false); //use state for clicking upon icon
    const handleOpen = () => setOpen((cur) => !cur); //handle opening
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpen(false)
        );
    }, []);
    return (
        <Navbar className="bg-brown-black" fullWidth>
            <div className="container mx-auto flex items-center justify-between text-snow">
                <Typography
                    as="a"
                    href="/"
                    className="mr-4 cursor-pointer text-2xl font-montserrat"
                >
                    Hanoi Marathon
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <Link to="/login">
                    <Button className="hidden lg:inline-block font-montserrat bg-paynes-gray">
                        Sign in
                    </Button>
                </Link>
                <IconButton
                    size="sm"
                    variant="text"
                    color="blue-gray"
                    onClick={handleOpen}
                    className="ml-auto inline-block text-coffee-web lg:hidden"
                >
                    {open ? (
                        <ListOption />
                    ) : (
                        <XMark />
                    )}
                </IconButton>
            </div>
            <Collapse open={open}>
                <div className="mt-2 rounded-sm bg-coffee-web py-2 font-roboto">
                    <NavList />
                    <Link to="/login">
                        <Button className="mb-3 mt-3 bg-auburn" href="#login" fullWidth>
                            Sign in
                        </Button>
                    </Link>
                </div>
            </Collapse>
        </Navbar>
    )
}