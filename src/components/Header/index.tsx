import React from "react";
import { Container } from "./styles";
import Switch from "react-switch";

const Header: React.FC = () => {
  return (
    <Container>
      Hello world!
      <Switch onChange={() => {}} checked={true} checkedIcon={false} uncheckedIcon={false} height={40} width={40} />
    </Container>
  );
};

export default Header;
