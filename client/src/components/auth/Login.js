import { useState } from "react";
import styled from "styled-components";
import AuthError from "../AuthError";

function Login() {
  const [error, setError] = useState("");

  return (
    <Container>
      {error && <AuthError message={error} />}
      <form>
        <div>
          <label htmlFor="">Email address</label>
          <input type="email" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100%;

  form {
    display: flex;
    flex-direction: column;

    button {
      padding: 0.7rem 1rem;
      background: var(--primary);
      border: none;
      color: var(--pure);
      font-size: 1rem;
      border-radius: 6px;
      font-family: inherit;
      cursor: pointer;
      font-weight: 500;
      width: 50%;
      margin-left: auto;
    }

    div {
      display: flex;
      flex-direction: column;

      label {
        margin-bottom: 0.5rem;
      }

      input {
        width: 100%;
        padding: 0.7rem 0.5rem;
        font-size: 1rem;
        font-family: inherit;
        margin-bottom: 1rem;
        border: 1px solid rgba(0, 0, 0, 0.2);
        outline: none;
        border-radius: 3px;

        &:focus {
          border-color: var(--primary);
        }
      }
    }
  }
`;
