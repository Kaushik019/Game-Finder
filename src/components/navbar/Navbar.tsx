import { HStack, Image, Text } from "@chakra-ui/react";

import logo from "../../assets/logo.webp";
import ColorModeSwitch from "../ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="15px">
      <Image src={logo} boxSize="60px" />
      <HStack>
        <Text>Dark Mode</Text>
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default Navbar;
