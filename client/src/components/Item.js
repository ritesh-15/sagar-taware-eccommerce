import styled from "styled-components";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function Item() {
  return (
    <Container>
      <Top>
        <img
          src="https://rukminim1.flixcart.com/image/416/416/juwzf680/headphone-refurbished/7/h/k/z-c100si-jbl-original-imaffxja5vmgwudz.jpeg?q=70"
          alt=""
        />
        <h1>JBL C150SI Wired Headset (Black, In the Ear)</h1>
      </Top>
      <Price>
        <span>₹895</span>
        <small>₹900</small>
        <CheckCircleIcon className="assured" />
        <p>Assured</p>
      </Price>
      <Buttons>
        <button>Add to cart</button>
        <button>Buy now</button>
      </Buttons>
    </Container>
  );
}

export default Item;

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  background: var(--pure);
  cursor: pointer;
  transition: all 250ms ease-in;

  &:hover {
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1), -5px 0 20px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.5rem;

  img {
    width: 100%;
    max-width: 200px;
    height: 200px;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  h1 {
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 90%;
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;

  p {
    font-size: 0.8rem;
    margin-left: 2px;
  }

  span {
    font-weight: 600;
    font-size: 1.3rem;
  }

  small {
    margin-left: 1rem;
    text-decoration: line-through;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;

  button {
    width: 100%;
    padding: 0.8rem 1rem;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 500;

    &:last-child {
      background: var(--primary);
      color: var(--pure);
      border-radius: 6px;
      cursor: pointer;
    }
  }
`;
