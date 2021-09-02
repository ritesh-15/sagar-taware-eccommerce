import styled from "styled-components";
import AuthError from "../AuthError";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddresss } from "../../reducers/registrationSlice";

function Address({ onNext, onBack }) {
  const {
    district: sDist,
    subDist: sSubDist,
    village: sVillage,
    address: sAddress,
  } = useSelector((state) => state.register.address);
  const [error, setError] = useState("");
  const [district, setDistrict] = useState(sDist);
  const [subDist, setSubDist] = useState(sSubDist);
  const [village, setVillage] = useState(sVillage);
  const [address, setAddress] = useState(sAddress);
  const dispatch = useDispatch();

  const validate = (e) => {
    e.preventDefault();

    if (!district || !subDist || !village || !address) {
      setError("Please fill information!");
      return;
    }

    dispatch(
      setAddresss({
        district,
        subDist,
        village,
        address,
      })
    );
  };

  return (
    <Container>
      {error && <AuthError message={error} />}
      <form>
        <div>
          <label htmlFor="">District</label>
          <input
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Sub district</label>
          <input
            value={subDist}
            onChange={(e) => setSubDist(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Village</label>
          <input
            value={village}
            onChange={(e) => setVillage(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>
        <Buttons>
          <button onClick={onBack} type="button">
            Back
          </button>
          <button onClick={validate} type="submit">
            Register
          </button>
        </Buttons>
      </form>
    </Container>
  );
}

export default Address;

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

      textarea {
        width: 100%;
        padding: 0.7rem 0.5rem;
        font-size: 1rem;
        font-family: inherit;
        margin-bottom: 1rem;
        border: 1px solid rgba(0, 0, 0, 0.2);
        outline: none;
        border-radius: 3px;
        resize: none;

        &:focus {
          border-color: var(--primary);
        }
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
