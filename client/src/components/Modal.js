import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";

function Modal({ children, open, setOpen }) {
  return (
    <Container className={!open && "modal-close"}>
      <Main>
        {children}
        <CloseIcon
          onClick={(e) => {
            setOpen(false);
            const body = document.getElementById("body");
            body.style.overflow = "auto";
          }}
          className="close-icon"
        />
      </Main>
    </Container>
  );
}

export default Modal;

const Container = styled.div`
  position: fixed;
  z-index: 110;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  left: 0;
  top: 0;
  transition: all 250ms ease-in;
`;

const Main = styled.div`
  width: 95%;
  background: var(--pure);
  max-width: 500px;
  height: fit-content;
  margin-top: 6rem;
  position: relative;
  padding: 1rem;
`;
