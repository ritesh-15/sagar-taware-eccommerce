import styled from "styled-components";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Item from "../components/Item";

function Home() {
  return (
    <Container>
      <Flex>
        <Center>
          <h1>Online Shopping Made Easy</h1>
          <p>
            Shop with us and get your products home delivar with no delivary
            charges
          </p>
          <button>
            <span>Start Shopping Now</span>
            <ArrowRightAltIcon className="btn-arrow" />
          </button>
        </Center>
      </Flex>

      <h2>Products Available</h2>

      <Products>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Products>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;

  h2 {
    font-size: 1.5rem;
    text-align: center;
    margin: 1rem 0;
    font-weight: 600;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  height: 100vh;
  background: linear-gradient(
    to right bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.8)
  );

  &::before {
    content: "";
    position: absolute;
    background: url("https://images.unsplash.com/photo-1560073210-1eb8ea89d4cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHNob3BwaW5nJTIwYmFnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
      no-repeat center center/cover;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

const Center = styled.div`
  width: 90%;
  max-width: 600px;

  button {
    padding: 1rem;
    border-radius: 6px;
    border: none;
    outline: none;
    background: var(--pure);
    color: var(--primary);
    margin-top: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px solid transparent;
    transition: all 250ms ease-in;

    &:hover {
      background: transparent;
      border-color: var(--pure);
      color: var(--pure);
    }

    span {
      font-size: 1rem;
      font-weight: 600;
      margin-right: 0.5rem;
    }
  }

  p {
    font-size: 1.3rem;
    color: var(--pure);
    width: 70%;
    font-weight: 400;
    opacity: 0.8;
  }

  h1 {
    color: var(--pure);
    font-size: 4rem;
    font-weight: 600;
  }
`;

const Products = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
