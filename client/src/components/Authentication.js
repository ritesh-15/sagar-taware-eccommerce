import { useState } from "react";
import styled from "styled-components";
import Login from "./auth/Login";
import Register from "./auth/Register";

const tabs = {
  1: Login,
  2: Register,
};

function Authentication() {
  const [tab, setTab] = useState(1);

  const Component = tabs[tab];

  return (
    <Container>
      <Tabs>
        <button onClick={() => setTab(1)} className={tab == 1 && "active-tab"}>
          <span>Login</span>
        </button>
        <button className={tab == 2 && "active-tab"} onClick={() => setTab(2)}>
          <span>Register</span>
        </button>
      </Tabs>
      <Component />
    </Container>
  );
}

export default Authentication;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Tabs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  button {
    width: 100%;
    padding: 1rem 0;
    background: none;
    border: none;
    border-bottom: 4px solid transparent;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.03);
    font-size: 1rem;
    font-weight: 500;
  }
`;
