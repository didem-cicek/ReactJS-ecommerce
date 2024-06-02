import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
    const [cart, setCart] = useState(3);

    const menus = [
        {
            name: "Home",
            id: 1,
            path: "/"
        },
        {
            name: "About Us",
            id: 2,
            path: "/about"
        },
        {
            name: "Wish List",
            id: 3,
            path: "/wishlist"
        }
    ]
    return (
        <div>
            <Navbar expand="lg" className={`${styles.navBar} fixed-top`}>
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/" className={`${styles.navLink} text-uppercase`}>
                            coder ecommerce
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll>

                            {menus.map((menu) => (
                                <NavLink
                                    to={menu.path}
                                    key={menu.id}
                                    className={`${styles.navlink} ${styles.menuLink}`}
                                >
                                    {menu.name}
                                </NavLink>
                            ))}

                            <NavLink to="/cart"
                                className={`${styles.navLink} ${styles.cartIcon}`}>
                                <AiOutlineShoppingCart size={23} />{" "}
                                <div className={styles.cartLength}>
                                    <h6>{cart}</h6>
                                </div>
                            </NavLink>
                        </Nav>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>

    );
}

export default NavBar;