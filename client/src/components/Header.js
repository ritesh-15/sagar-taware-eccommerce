import styled from "styled-components";
import { SearchOutlined } from "@material-ui/icons";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useEffect } from "react";
import { useState } from "react";
import Modal from "./Modal";
import Authentication from "./Authentication";

function Header() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const transitionNav = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      transitionNav();
    });
    return () => window.removeEventListener("scroll", transitionNav);
  }, []);

  return (
    <Container className={show && "show"}>
      <Title>
        <h1>MrSeller</h1>
      </Title>
      <Search className={show && "show-searchbar"}>
        <SearchOutlined />
        <input type="text" placeholder="Search products" />
      </Search>
      <NavMenue>
        <button
          onClick={() => {
            setOpen(true);
            const body = document.getElementById("body");
            body.style.overflow = "hidden";
          }}
        >
          Login
        </button>
        <div>
          <ShoppingCartOutlinedIcon />
          <p>1</p>
          <span>Cart</span>
        </div>
      </NavMenue>
      <Modal open={open} setOpen={setOpen}>
        <Authentication />
      </Modal>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 60px;
  background: transparent;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  transition: all 0.25s ease-in;
`;

const Title = styled.div`
  h1 {
    color: var(--pure);
    font-weight: 600;
    font-size: 1.25rem;
    cursor: pointer;
  }
`;

const Search = styled.div`
  background: var(--pure);
  display: flex;
  align-items: center;
  height: 70%;
  padding: 0 1rem;
  border-radius: 6px;
  color: var(--text-light);
  width: 80%;
  max-width: 500px;
  opacity: 0;
  cursor: text;
  transition: all 0.25s ease-in;

  input {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    background: none;
    margin-left: 0.5rem;
    font-size: 0.75rem;
    font-family: inherit;
  }
`;

const NavMenue = styled.div`
  display: flex;
  align-items: center;

  button {
    background: var(--pure);
    border: none;
    outline: none;
    padding: 0.7rem 2rem;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    width: 100%;
    height: 100%;
    color: var(--primary);
  }

  div {
    display: flex;
    align-items: center;
    color: var(--pure);
    margin-left: 1.5rem;
    position: relative;
    cursor: pointer;

    p {
      background: var(--pure);
      color: var(--primary);
      width: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      top: -15px;
      font-size: 0.75rem;
      font-weight: 500;
      right: 30px;
    }
  }
`;
