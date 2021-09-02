import styled from "styled-components";
import AuthError from "../AuthError";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDetails } from "../../reducers/registrationSlice";

function Details({ onNext }) {
  const {
    name: storeName,
    email: storeEmail,
    number: storeNumber,
  } = useSelector((state) => state.register.details);
  const [error, setError] = useState("");
  const [name, setName] = useState(storeName);
  const [email, setEmail] = useState(storeEmail);
  const [number, setNumber] = useState(storeNumber);
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validate = (e) => {
    e.preventDefault();

    if (!email || !name || !number) {
      setError("Please fill information!");
      return;
    }

    if (!validateEmail(email)) {
      setError("Wrong email address!");
      return;
    }

    if (number.length !== 10) {
      setError("Wrong phone number!");
      return;
    }

    dispatch(
      setDetails({
        email,
        name,
        number,
      })
    );

    onNext();
  };

  return (
    <Container>
      {error && <AuthError message={error} />}
      <form>
        <div>
          <label htmlFor="">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Email address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>
        <div>
          <label htmlFor="">Phone number</label>
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="number"
          />
        </div>
        <button onClick={validate} type="submit">
          Next
        </button>
      </form>
    </Container>
  );
}

export default Details;

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
      width: 50%;
      margin-left: auto;
      font-weight: 500;
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
