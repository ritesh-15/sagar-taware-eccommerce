import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import styled from "styled-components";

function AuthError({ message }) {
  return (
    <Error>
      <ErrorOutlineIcon />
      <p>{message}</p>
    </Error>
  );
}

export default AuthError;

const Error = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ff0000;
  margin-bottom: 1rem;
  padding: 0.7rem;
  border-radius: 3px;
  color: #ff0000;

  p {
    margin-left: 0.5rem;
  }
`;
