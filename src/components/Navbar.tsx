import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <HStack paddingX={5}>
        <ColorModeSwitch />
        <Text whiteSpace="nowrap">Dark Mode</Text>
      </HStack>
    </HStack>
  );
};

export default Navbar;
