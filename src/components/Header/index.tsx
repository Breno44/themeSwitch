import React, { useContext } from "react";
import { Container } from "./styles";
import { ThemeContext } from "styled-components";
import Switch from "react-switch";
import { shade } from "polished";

interface Props {
  toogleTheme(): void;
}

const Header: React.FC<Props> = ({ toogleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      Hello world!
      <Switch
        onChange={toogleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secondary}
      />
    </Container>
  );
};

export default Header;
