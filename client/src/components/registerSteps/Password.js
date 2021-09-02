import styled from "styled-components";
import AuthError from "../AuthError";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPasswords } from "../../reducers/registrationSlice";

function Password({ onNext, onBack }) {
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const validate = (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setError("Please enter password!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    dispatch(
      setPasswords({
        password,
        confirmPass: confirmPassword,
      })
    );

    onNext();
  };

  return (
    <Container>
      {error && <AuthError message={error} />}
      <form>
        <div>
          <label htmlFor="">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <div>
          <label htmlFor="">Confirm password</label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
          />
        </div>
        <Buttons>
          <button onClick={onBack} type="button">
            Back
          </button>
          <button onClick={validate} type="submit">
            Next
          </button>
        </Buttons>
      </form>
    </Container>
  );
}

export default Password;

const Container = styled.div`
  width: 100%;
  height: 100%;

  form {
    display: flex;
    flex-direction: column;

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

const Buttons = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: flex-start;

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
    width: 100%;

    &:nth-child(1) {
      background: transparent;
      color: var(--primary);
    }
  }
`;
