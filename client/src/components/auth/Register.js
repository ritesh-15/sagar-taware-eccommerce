import { useState } from "react";
import styled from "styled-components";
import Address from "../registerSteps/Address";
import Details from "../registerSteps/Details";
import Password from "../registerSteps/Password";

const steps = {
  1: Details,
  2: Password,
  3: Address,
};

function Register() {
  const [step, setStep] = useState(1);

  const onNext = () => {
    setStep(step + 1);
  };

  const onBack = () => {
    setStep(step - 1);
  };

  const Components = steps[step];

  return (
    <Container>
      <Components onBack={onBack} onNext={onNext} />
    </Container>
  );
}

export default Register;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
